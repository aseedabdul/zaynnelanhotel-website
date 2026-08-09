import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

const NEARBY = [
  { label: 'International Airport', time: '28 min' },
  { label: 'City Centre', time: '8 min' },
  { label: 'Convention Centre', time: '12 min' },
  { label: 'Historic District', time: '15 min' },
];

export default function Location() {
  const [textRef, textIn] = useReveal();
  const [mapRef, mapIn] = useReveal();

  return (
    <section className="section section-ivory" id="location">
      <div className="container loc-grid">
        <div ref={textRef} className={`reveal${textIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Location</p>
          <h2 style={{ fontSize: 'clamp(2rem,3.6vw,3rem)', margin: '1rem 0 1.4rem' }}>
            12 Grand Avenue, Central District
          </h2>
          <p style={{ color: '#4a4640', maxWidth: '46ch' }}>
            Set within easy reach of the city&rsquo;s landmarks, Zaynn Élan offers a quiet, central
            address for both leisure and business travel.
          </p>
          <ul className="loc-list">
            {NEARBY.map((n) => (
              <li key={n.label}><span>{n.label}</span><span>{n.time}</span></li>
            ))}
          </ul>
        </div>
        <div
          ref={mapRef}
          className={`loc-map reveal${mapIn ? ' in-view' : ''}`}
          role="img"
          aria-label="Stylized map showing the location of Zaynn Élan at 12 Grand Avenue, Central District"
        >
          <span className="pin"></span>
        </div>
      </div>
    </section>
  );
}
