import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const EMPTY_ERRORS = { name: false, email: false, subject: false, message: false };

export default function Contact() {
  const [textRef, textIn] = useReveal();
  const [formRef, formIn] = useReveal();
  const [values, setValues] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState(EMPTY_ERRORS);
  const [status, setStatus] = useState('');

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
    const next = {
      name: values.name.trim().length === 0,
      email: values.email.trim().length === 0 || !emailOk,
      subject: values.subject.trim().length === 0,
      message: values.message.trim().length === 0,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus('');
      return;
    }
    setStatus('Thank you — this is a demo form, so no message was actually sent, but your details looked complete and valid.');
    setValues({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors(EMPTY_ERRORS);
  }

  return (
    <section className="section section-dark" id="contact">
      <div className="container contact-grid">
        <div ref={textRef} className={`reveal${textIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Contact</p>
          <h2 style={{ fontSize: 'clamp(2rem,3.6vw,3rem)', margin: '1rem 0 1.8rem' }}>
            We&rsquo;d Love To Hear From You
          </h2>
          <ul className="contact-info">
            <li><span className="label">Phone</span><span className="val">+1 (800) 555-0198</span></li>
            <li><span className="label">Email</span><span className="val">reservations@zaynn-elan.com</span></li>
            <li><span className="label">Address</span><span className="val">12 Grand Avenue, Central District</span></li>
          </ul>
        </div>

        <form ref={formRef} className={`reveal${formIn ? ' in-view' : ''}`} onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className={`field${errors.name ? ' invalid' : ''}`}>
              <label htmlFor="cf-name">Name</label>
              <input type="text" id="cf-name" value={values.name} onChange={update('name')} required />
              <span className="err">Please enter your name.</span>
            </div>
            <div className={`field${errors.email ? ' invalid' : ''}`}>
              <label htmlFor="cf-email">Email</label>
              <input type="email" id="cf-email" value={values.email} onChange={update('email')} required />
              <span className="err">Please enter a valid email address.</span>
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="cf-phone">Phone</label>
              <input type="tel" id="cf-phone" value={values.phone} onChange={update('phone')} />
            </div>
            <div className={`field${errors.subject ? ' invalid' : ''}`}>
              <label htmlFor="cf-subject">Subject</label>
              <input type="text" id="cf-subject" value={values.subject} onChange={update('subject')} required />
              <span className="err">Please enter a subject.</span>
            </div>
          </div>
          <div className={`field${errors.message ? ' invalid' : ''}`}>
            <label htmlFor="cf-message">Message</label>
            <textarea id="cf-message" value={values.message} onChange={update('message')} required />
            <span className="err">Please enter a message.</span>
          </div>
          <button type="submit" className="btn btn-solid">Send Message</button>
          {status && <p className="form-status show" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
