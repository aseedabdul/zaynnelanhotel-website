import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('Please enter a valid email address.');
      return;
    }
    setStatus('Thank you — this is a demo form, so no subscription was actually created.');
    setEmail('');
  }

  return (
    <section className="section section-ivory newsletter">
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Stay Connected</p>
        <h2 style={{ marginTop: '1rem' }}>Stay a little longer.</h2>
        <p>Receive occasional invitations, seasonal offers, and stories from Zaynn Élan.</p>
        <form className="news-form" onSubmit={handleSubmit}>
          <label htmlFor="news-email" className="visually-hidden" style={{ position: 'absolute', left: '-9999px' }}>
            Your email address
          </label>
          <input
            type="email"
            id="news-email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {status && <p className="news-status show" role="status">{status}</p>}
      </div>
    </section>
  );
}
