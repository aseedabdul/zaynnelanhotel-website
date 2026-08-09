import React from 'react';
import Modal from './Modal.jsx';
import { SPA } from '../data/spa.js';

export default function SpaModal({ isOpen, onClose }) {
  function handleReserve() {
    onClose();
    setTimeout(() => {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  const titleId = 'spa-modal-title';

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy={titleId}>
      <div className="detail-modal detail-modal-wide">
        <div className="detail-media">
          <div className="photo detail-hero-photo">
            <img src={SPA.images[0].src} alt={SPA.images[0].alt} />
          </div>
          <div className="detail-thumbs static">
            {SPA.images.map((img) => (
              <div className="detail-thumb active" key={img.src}>
                <img src={img.src} alt="" aria-hidden="true" />
                <span>{img.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="detail-body">
          <p className="eyebrow">Spa &amp; Wellness</p>
          <h3 id={titleId}>Restore, Rebalance, Renew</h3>
          <p className="detail-tagline">{SPA.intro}</p>

          <h4 className="detail-subhead">Signature Treatments</h4>
          <ul className="detail-list treatments">
            {SPA.treatments.map((t) => (
              <li key={t.name}>
                <div className="treatment-row">
                  <span className="treatment-name">{t.name}</span>
                  <span className="treatment-duration">{t.duration}</span>
                </div>
                <p className="treatment-desc">{t.description}</p>
              </li>
            ))}
          </ul>

          <div className="detail-facts single">
            <div><span className="fact-label">Hours</span><span>{SPA.hours}</span></div>
          </div>

          <div className="detail-footer">
            <button className="btn btn-solid" onClick={handleReserve}>Book an Appointment</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
