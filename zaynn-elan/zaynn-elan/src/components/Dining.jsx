import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { DINING } from '../data/dining.js';
import DiningModal from './DiningModal.jsx';

export default function Dining() {
  const [headRef, headIn] = useReveal();
  const [activeVenue, setActiveVenue] = useState(null);

  return (
    <section className="section-dark" id="dining" style={{ padding: '7rem 0' }}>
      <div className="container" style={{ padding: '0 6vw' }}>
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Dining</p>
          <h2>A Table Worth The Journey</h2>
        </div>
      </div>
      <div className="dining-list">
        {DINING.map((venue, i) => (
          <DiningRow key={venue.id} venue={venue} reverse={i % 2 === 1} onDiscover={() => setActiveVenue(venue)} />
        ))}
      </div>

      <DiningModal venue={activeVenue} isOpen={!!activeVenue} onClose={() => setActiveVenue(null)} />
    </section>
  );
}

function DiningRow({ venue, reverse, onDiscover }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`dining-row reveal${inView ? ' in-view' : ''}`}>
      <div className="dining-media" style={reverse ? { order: 2 } : undefined}>
        <div className="photo" style={{ height: '100%' }}>
          <img src={venue.image.src} alt={venue.image.alt} loading="lazy" />
        </div>
      </div>
      <div className="dining-text">
        <p className="eyebrow">{venue.kind}</p>
        <h3>{venue.name}</h3>
        <p className="dining-cuisine">{venue.cuisine}</p>
        <p className="desc">{venue.description}</p>
        <p className="dining-hours">{venue.hours}</p>
        <button className="btn" onClick={onDiscover}>Discover Dining</button>
      </div>
    </div>
  );
}
