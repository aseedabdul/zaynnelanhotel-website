import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { GALLERY } from '../data/gallery.js';

export default function Gallery() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  return (
    <section className="section section-ivory">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Gallery</p>
          <h2>A Sense Of The Place</h2>
        </div>
        <div ref={gridRef} className={`gallery-grid reveal${gridIn ? ' in-view' : ''}`}>
          {GALLERY.map((img, i) => (
            <div className="gallery-item" key={img.src + i}>
              <div className="photo photo-hover" style={{ aspectRatio: img.aspect }}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
