import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { IMAGES } from '../data/images.js';

export default function Intro() {
  const [textRef, textIn] = useReveal();
  const [mediaRef, mediaIn] = useReveal();

  return (
    <section className="section section-ivory">
      <div className="container intro-grid">
        <div ref={textRef} className={`reveal${textIn ? ' in-view' : ''}`}>
          <p className="eyebrow">The Zaynn Élan Experience</p>
          <h2>A stay defined by quiet luxury.</h2>
          <p>
            Zaynn Élan is an invitation to slow down, reconnect, and experience hospitality at its
            most considered. From thoughtfully designed suites to intuitive service and exceptional
            cuisine, every detail has been created to make your stay effortless.
          </p>
          <div style={{ marginTop: '2.2rem' }}>
            <a href="#rooms" className="btn">Discover The Hotel</a>
          </div>
        </div>
        <div ref={mediaRef} className={`intro-media reveal${mediaIn ? ' in-view' : ''}`}>
          <div className="photo">
            <img src={IMAGES.lobby} alt="Marble lobby with warm ambient lighting at Zaynn Élan" loading="lazy" />
          </div>
          <div className="photo photo-small">
            <img src={IMAGES.pool} alt="Illuminated pool terrace in the evening" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
