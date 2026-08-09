import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { ROOMS } from '../data/rooms.js';
import RoomModal from './RoomModal.jsx';

export default function Rooms() {
  const [headRef, headIn] = useReveal();
  const [activeRoom, setActiveRoom] = useState(null);

  function openRoom(room) {
    setActiveRoom(room);
  }
  function closeRoom() {
    setActiveRoom(null);
  }

  function handleBookNow(room) {
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="section section-soft" id="rooms">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Accommodation</p>
          <h2>Rooms &amp; Suites</h2>
        </div>
        <div className="rooms-grid">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} onView={() => openRoom(room)} onBook={() => handleBookNow(room)} />
          ))}
        </div>
      </div>

      <RoomModal room={activeRoom} isOpen={!!activeRoom} onClose={closeRoom} />
    </section>
  );
}

function RoomCard({ room, onView, onBook }) {
  const [ref, inView] = useReveal();
  const cover = room.images[0];

  return (
    <article ref={ref} className={`room-card reveal${inView ? ' in-view' : ''}`}>
      <div className="photo photo-hover" style={{ aspectRatio: '4/5' }}>
        <img src={cover.src} alt={cover.alt} loading="lazy" />
        <div className="photo-overlay">
          <button className="mini-btn" onClick={onView}>View Room</button>
          <button className="mini-btn solid" onClick={onBook}>Book Now</button>
        </div>
      </div>
      <div className="room-body">
        <h3>{room.name}</h3>
        <p className="desc">{room.tagline}</p>
        <div className="room-meta">
          <span>{room.size}</span><span>{room.guests}</span><span>{room.bed}</span>
        </div>
        <div className="room-price">From ${room.price.toLocaleString()} <span>/ night</span></div>
        <button className="btn" onClick={onView} style={{ width: '100%', justifyContent: 'center' }}>
          View Room
        </button>
      </div>
    </article>
  );
}
