import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { FAQ as FAQ_DATA } from '../data/faq.js';

export default function FAQ() {
  const [headRef, headIn] = useReveal();
  const [listRef, listIn] = useReveal();

  return (
    <section className="section section-soft">
      <div className="container">
        <div ref={headRef} className={`section-head center reveal${headIn ? ' in-view' : ''}`}>
          <p className="eyebrow">Good To Know</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div ref={listRef} className={`faq-list reveal${listIn ? ' in-view' : ''}`}>
          {FAQ_DATA.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}<span className="icon">+</span></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
