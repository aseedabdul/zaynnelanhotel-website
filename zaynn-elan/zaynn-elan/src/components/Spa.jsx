import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { IMAGES } from '../data/images.js';
import { SPA } from '../data/spa.js';
import SpaModal from './SpaModal.jsx';

export default function Spa() {
  const [ref, inView] = useReveal();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="spa-wrap" id="wellness">
      <div className="photo" aria-hidden="true">
        <img src={IMAGES.sauna} alt="" loading="lazy" />
      </div>
      <div ref={ref} className={`spa-content reveal${inView ? ' in-view' : ''}`}>
        <p className="eyebrow">Spa &amp; Wellness</p>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', margin: '1rem 0 1.2rem' }}>
          Restore balance in a sanctuary designed around stillness.
        </h2>
        <p style={{ color: 'rgba(245,241,232,.85)', maxWidth: '44ch', marginBottom: '2rem' }}>{SPA.intro}</p>
        <button className="btn btn-solid" onClick={() => setModalOpen(true)}>Explore Wellness</button>
      </div>

      <SpaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
