/* ============================================================
   LDB DATA LICENSING QUALIFICATION CALCULATOR
   public/calc.js  —  DO NOT MODIFY
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     SCORING MATRICES
  ---------------------------------------------------------- */
  var INDUSTRY_BASE = {
    logistics:    { label: 'Logistics & Freight',    base: 95000,  factor: 1.20 },
    legal:        { label: 'Legal & Professional',   base: 82000,  factor: 1.15 },
    healthcare:   { label: 'Healthcare & Clinical',  base: 110000, factor: 1.35 },
    construction: { label: 'Construction & Trades',  base: 68000,  factor: 1.05 },
    finance:      { label: 'Finance & Insurance',    base: 120000, factor: 1.40 },
    real_estate:  { label: 'Real Estate & Property', base: 75000,  factor: 1.10 },
    manufacturing:{ label: 'Manufacturing & Supply', base: 88000,  factor: 1.18 },
    other:        { label: 'Other Industry',         base: 55000,  factor: 0.90 },
  };

  var YEARS_MULT = {
    '2_4':   0.60,
    '5_9':   0.85,
    '10_19': 1.00,
    '20p':   1.25,
  };

  var VOLUME_MULT = {
    small:    0.55,  /* < 500 records/yr */
    medium:   0.85,  /* 500-5,000 */
    large:    1.15,  /* 5,000-50,000 */
    xlarge:   1.45,  /* 50,000+ */
  };

  var DTYPE_MULT = {
    workflow:   1.00,
    outcomes:   1.20,
    comms:      0.90,
    financial:  0.80, /* redacted anyway */
    all:        1.40,
  };

  /* Quality thresholds */
  var THRESHOLDS = {
    disqualify: 0.35,
    marginal:   0.55,
    eligible:   0.75,
  };

  /* ----------------------------------------------------------
     STATE
  ---------------------------------------------------------- */
  var sel = { industry: null, years: null, volume: null, dtype: null };

  /* ----------------------------------------------------------
     HELPERS
  ---------------------------------------------------------- */
  function q(s)  { return document.querySelector(s); }
  function qa(s) { return document.querySelectorAll(s); }
  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }
  function fmtRange(low, high) {
    return fmt(low) + ' – ' + fmt(high);
  }

  /* ----------------------------------------------------------
     OPTION HANDLER
  ---------------------------------------------------------- */
  function initOpts() {
    qa('.cx-opt').forEach(function (el) {
      el.addEventListener('click', function () {
        var group = this.dataset.group;
        qa('.cx-opt[data-group="' + group + '"]').forEach(function (o) {
          o.classList.remove('cx-active');
        });
        this.classList.add('cx-active');
        sel[group] = this.dataset.val;
        checkReady();
      });
    });
  }

  function checkReady() {
    var ready = Object.keys(sel).every(function (k) { return sel[k] !== null; });
    var btn = q('.cx-go');
    if (btn) btn.disabled = !ready;
  }

  /* ----------------------------------------------------------
     COMPUTATION
  ---------------------------------------------------------- */
  function compute() {
    var ind = INDUSTRY_BASE[sel.industry] || INDUSTRY_BASE.other;
    var yMult  = YEARS_MULT[sel.years]   || 1.00;
    var vMult  = VOLUME_MULT[sel.volume] || 1.00;
    var dMult  = DTYPE_MULT[sel.dtype]   || 1.00;

    var qualScore = (yMult + vMult + dMult) / 3;
    var base = ind.base * ind.factor;
    var estimate = base * yMult * vMult * dMult;

    var low  = Math.round(estimate * 0.72);
    var high = Math.round(estimate * 1.31);
    var mid  = Math.round((low + high) / 2);

    return { qualScore: qualScore, low: low, mid: mid, high: high };
  }

  /* ----------------------------------------------------------
     RENDER RESULTS
  ---------------------------------------------------------- */
  function renderResult(r) {
    var heroEl  = q('.res-hero');
    var potEl   = q('.res-pot');
    var nextEl  = q('.res-next');
    var wrapEl  = q('.cx-results');

    if (!heroEl || !wrapEl) return;

    if (r.qualScore < THRESHOLDS.disqualify) {
      if (heroEl)  heroEl.textContent  = 'Not Yet';
      if (potEl)   potEl.textContent   = 'DATA INVENTORY INSUFFICIENT';
      if (nextEl)  nextEl.textContent  =
        'Your records may not yet meet the volume and depth requirements ' +
        'AI buyers look for. Contact us — in some cases, a 6-month ' +
        'documentation sprint can change that picture.';
    } else if (r.qualScore < THRESHOLDS.marginal) {
      if (heroEl)  heroEl.textContent  = fmt(r.mid);
      if (potEl)   potEl.textContent   = 'RANGE: ' + fmtRange(r.low, r.high) + ' — MARGINAL QUALIFICATION';
      if (nextEl)  nextEl.textContent  =
        'Your corpus qualifies with caveats. The valuation range reflects ' +
        'gaps that could be addressed before package. LDB recommends a ' +
        'qualification call to determine if a documentation sprint would ' +
        'lift the ceiling.';
    } else if (r.qualScore < THRESHOLDS.eligible) {
      if (heroEl)  heroEl.textContent  = fmt(r.mid);
      if (potEl)   potEl.textContent   = 'RANGE: ' + fmtRange(r.low, r.high) + ' — ELIGIBLE';
      if (nextEl)  nextEl.textContent  =
        'Your operational record set likely qualifies for licensing. ' +
        'The estimate above reflects current market rates for this ' +
        'industry and data profile. Next step: a 30-minute qualification ' +
        'call with LDB to confirm scope and begin buyer outreach.';
    } else {
      if (heroEl)  heroEl.textContent  = fmt(r.mid);
      if (potEl)   potEl.textContent   = 'RANGE: ' + fmtRange(r.low, r.high) + ' — STRONG QUALIFICATION';
      if (nextEl)  nextEl.textContent  =
        'Your business profile is a strong match for current AI buyer ' +
        'demand. The valuation above is conservative — actual market ' +
        'pricing may be higher depending on exclusivity terms. ' +
        'LDB recommends moving to active buyer matching within 30 days.';
    }

    wrapEl.classList.add('cx-show');

    /* Smooth scroll to results */
    setTimeout(function () {
      if (wrapEl) wrapEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  /* ----------------------------------------------------------
     INIT
  ---------------------------------------------------------- */
  function init() {
    initOpts();

    var btn = q('.cx-go');
    if (btn) {
      btn.disabled = true;
      btn.addEventListener('click', function () {
        var allSel = Object.keys(sel).every(function (k) { return sel[k] !== null; });
        if (!allSel) return;
        var result = compute();
        renderResult(result);
      });
    }
  }

  /* ----------------------------------------------------------
     BOOT
  ---------------------------------------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
