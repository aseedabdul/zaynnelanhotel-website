import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <p className="footer-wordmark">ZAYNN ÉLAN</p>
          <p className="footer-tagline">Where timeless elegance meets exceptional hospitality.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3a4 4 0 00-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 011-1z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 13v4" /></svg>
            </a>
          </div>
        </div>
        <div>
          <h5>Hotel</h5>
          <ul>
            <li><a href="#location">About</a></li>
            <li><a href="#rooms">Rooms &amp; Suites</a></li>
            <li><a href="#dining">Dining</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#wellness">Wellness</a></li>
          </ul>
        </div>
        <div>
          <h5>Guest Services</h5>
          <ul>
            <li><a href="#contact">Concierge</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#contact">Reservations</a></li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>+1 (800) 555-0198</li>
            <li>reservations@zaynn-elan.com</li>
            <li>12 Grand Avenue, Central District</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Zaynn Élan. All rights reserved.</span>
        <span>A fictional hotel concept, presented as a design demonstration.</span>
      </div>
    </footer>
  );
}
