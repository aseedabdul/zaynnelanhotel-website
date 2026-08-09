import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { WHY_CHOOSE } from '../data/services.js';

export default function WhyChoose() {
  const [headRef, headIn] = useReveal();

  return (
    <section className="section section-dark">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Why Zaynn Élan</p>
          <h2>An Uncommon Standard</h2>
        </div>
        <div className="why-grid">
          {WHY_CHOOSE.map((item, i) => (
            <WhyItem key={item.title} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItem({ item, index }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`why-item reveal${inView ? ' in-view' : ''}`}>
      <span className="num">{String(index).padStart(2, '0')}</span>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
}
