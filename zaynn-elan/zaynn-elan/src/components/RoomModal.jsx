import React, { useState } from 'react';
import Modal from './Modal.jsx';

export default function RoomModal({ room, isOpen, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!room) return null;

  // Reset the active image whenever a new room is opened
  function handleClose() {
    onClose();
    setTimeout(() => setActiveImage(0), 300);
  }

  function handleBookNow() {
    handleClose();
    setTimeout(() => {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  const titleId = `room-modal-title-${room.id}`;
  const active = room.images[activeImage] || room.images[0];

  return (
    <Modal isOpen={isOpen} onClose={handleClose} labelledBy={titleId}>
      <div className="detail-modal">
        <div className="detail-media">
          <div className="photo detail-hero-photo">
            <img src={active.src} alt={active.alt} />
          </div>
          {room.images.length > 1 && (
            <div className="detail-thumbs" role="tablist" aria-label={`${room.name} photos`}>
              {room.images.map((img, i) => (
                <button
                  key={img.src + i}
                  role="tab"
                  aria-selected={i === activeImage}
                  className={`detail-thumb${i === activeImage ? ' active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img.src} alt="" aria-hidden="true" />
                  <span>{img.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="detail-body">
          <p className="eyebrow">Rooms &amp; Suites</p>
          <h3 id={titleId}>{room.name}</h3>
          <p className="detail-tagline">{room.tagline}</p>

          <div className="detail-facts">
            <div><span className="fact-label">Size</span><span>{room.size}</span></div>
            <div><span className="fact-label">Guests</span><span>{room.guests}</span></div>
            <div><span className="fact-label">Bed</span><span>{room.bed}</span></div>
          </div>

          <h4 className="detail-subhead">Amenities</h4>
          <ul className="detail-list">
            {room.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <div className="detail-footer">
            <div className="room-price">
              From ${room.price.toLocaleString()} <span>/ night</span>
            </div>
            <button className="btn btn-solid" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
