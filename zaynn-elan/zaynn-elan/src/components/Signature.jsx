import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { IMAGES } from '../data/images.js';

export default function Signature() {
  const [ref, inView] = useReveal();
  return (
    <section className="signature">
      <div className="photo" aria-hidden="true">
        <img src={IMAGES.entrance} alt="" loading="lazy" />
      </div>
      <div ref={ref} className={`signature-content reveal${inView ? ' in-view' : ''}`}>
        <h2>Every moment deserves to be remembered.</h2>
        <p>
          From the quiet gesture of a remembered preference to the grand arrangement of a private
          celebration, our service is built around noticing — so your stay feels considered at every turn.
        </p>
      </div>
    </section>
  );
}
