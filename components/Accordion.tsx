'use client';
import { useState } from 'react';

interface AccordionProps {
  items: { q: string; a: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div className={`accordion-item${open === i ? ' open' : ''}`} key={i}>
          <button
            className="accordion-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="accordion-q">{item.q}</span>
            <span className="accordion-icon">+</span>
          </button>
          <div className="accordion-body">
            <p className="accordion-a">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
