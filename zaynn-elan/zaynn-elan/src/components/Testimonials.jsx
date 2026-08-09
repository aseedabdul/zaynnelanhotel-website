import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { TESTIMONIALS } from '../data/testimonials.js';

export default function Testimonials() {
  const [headRef, headIn] = useReveal();

  return (
    <section className="section section-dark">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Guest Words</p>
          <h2>What Our Guests Say</h2>
        </div>
        <div className="test-grid">
          {TESTIMONIALS.map((t) => (
            <TestCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestCard({ t }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`test-card reveal${inView ? ' in-view' : ''}`}>
      <span className="quote-mark">&ldquo;</span>
      <p className="quote">{t.quote}</p>
      <p className="test-name">{t.name}</p>
      <p className="test-loc">{t.location}</p>
    </div>
  );
}
