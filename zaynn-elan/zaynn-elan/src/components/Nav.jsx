import React, { useEffect, useState } from 'react';

const LINKS = [
  { href: '#rooms', label: 'Rooms & Suites' },
  { href: '#dining', label: 'Dining' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#wellness', label: 'Services' },
  { href: '#location', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="wordmark">ZAYNN ÉLAN</a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="nav-cta">Book Your Stay</a>
        <button
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Book Your Stay</a>
      </div>
    </>
  );
}
