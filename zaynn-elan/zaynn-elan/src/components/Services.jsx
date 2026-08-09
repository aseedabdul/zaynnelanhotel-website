import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { SERVICES } from '../data/services.js';
import Icon from './Icon.jsx';

export default function Services() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  return (
    <section className="section section-ivory">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Amenities</p>
          <h2>Hotel Services</h2>
        </div>
        <div ref={gridRef} className={`services-grid reveal${gridIn ? ' in-view' : ''}`}>
          {SERVICES.map((s) => (
            <div className="service-item" key={s.title}>
              <Icon name={s.icon} />
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
