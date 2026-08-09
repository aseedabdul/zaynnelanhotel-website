import React from 'react';
import BookingBar from './BookingBar.jsx';
import { IMAGES } from '../data/images.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src={IMAGES.entrance} alt="" fetchpriority="high" />
      </div>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">Est. 1987 · Luxury Hotel &amp; Residences</p>
        <h1 className="hero-title">ZAYNN ÉLAN</h1>
        <p className="hero-tagline">Where timeless elegance meets exceptional hospitality.</p>
        <p className="hero-desc">
          Where timeless architecture meets contemporary comfort, Zaynn Élan offers an
          extraordinary retreat shaped by impeccable service, refined dining, and unforgettable moments.
        </p>
        <div className="hero-ctas">
          <a href="#rooms" className="btn btn-solid">Explore The Hotel</a>
          <a href="#rooms" className="btn">Discover Rooms</a>
        </div>
        <BookingBar />
      </div>
    </section>
  );
}
