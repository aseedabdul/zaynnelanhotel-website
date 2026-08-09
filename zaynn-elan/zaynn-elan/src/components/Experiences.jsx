import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { EXPERIENCES } from '../data/gallery.js';

export default function Experiences() {
  const [headRef, headIn] = useReveal();

  return (
    <section className="section section-ivory" id="experiences">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Experiences</p>
          <h2>Curated Moments</h2>
        </div>
        <div className="exp-grid">
          {EXPERIENCES.map((exp) => (
            <ExpCard key={exp.title} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpCard({ exp }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`exp-card reveal${inView ? ' in-view' : ''}`}>
      <div className="photo">
        <img src={exp.image} alt={exp.title} loading="lazy" />
      </div>
      <div className="exp-card-text">
        <h4>{exp.title}</h4>
        <p>{exp.description}</p>
      </div>
    </div>
  );
}
