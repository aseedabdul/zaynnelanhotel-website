import React from 'react';
import Modal from './Modal.jsx';

export default function DiningModal({ venue, isOpen, onClose }) {
  if (!venue) return null;

  function handleReserve() {
    onClose();
    setTimeout(() => {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  const titleId = `dining-modal-title-${venue.id}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy={titleId}>
      <div className="detail-modal">
        <div className="detail-media">
          <div className="photo detail-hero-photo">
            <img src={venue.image.src} alt={venue.image.alt} />
          </div>
        </div>
        <div className="detail-body">
          <p className="eyebrow">{venue.kind}</p>
          <h3 id={titleId}>{venue.name}</h3>
          <p className="dining-cuisine">{venue.cuisine}</p>
          <p className="detail-tagline">{venue.longDescription}</p>
          <div className="detail-facts single">
            <div><span className="fact-label">Hours</span><span>{venue.hours}</span></div>
          </div>
          <div className="detail-footer">
            <button className="btn btn-solid" onClick={handleReserve}>{venue.ctaLabel}</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
