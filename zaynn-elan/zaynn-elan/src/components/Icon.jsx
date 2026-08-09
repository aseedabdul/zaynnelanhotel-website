import React from 'react';

// A single, consistent line-icon set (stroke-based, matches the champagne
// gold accent) used across the Services grid. Kept as one small component
// so every icon shares the same visual language.
const PATHS = {
  concierge: 'M4 20v-6a8 8 0 0116 0v6 M2 20h20 M12 8a3 3 0 100-6 3 3 0 000 6z',
  valet: 'M3 10l2-5h10l2 5 M5 10h14v8H5z M7.5 18a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z M16.5 18a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z',
  transfer: 'M2 16l19-7-7 19-2-8-8-2 8-2z',
  pool: 'M3 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 M3 13c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 M4 4h16v6H4z',
  fitness: 'M6 20V10a6 6 0 0112 0v10 M4 20h16',
  spa: 'M12 3c2 3 3 5 3 8a3 3 0 11-6 0c0-3 1-5 3-8z M6 21c0-4 2.7-6 6-6s6 2 6 6',
  housekeeping: 'M4 4h16v4H4z M6 8v12h12V8 M10 12h4',
  roomservice: 'M4 10h16l-1.5 10h-13z M9 10V7a3 3 0 016 0v3',
  business: 'M3 4h18v14H3z M8 20h8 M7 9h10M7 13h6',
  wifi: 'M12 3a9 9 0 019 9 M8 12a4 4 0 018 0 M12 16v.01 M3 3a9 9 0 019 9',
  laundry: 'M6 3h9l3 3v15H6z M10 11l2 2 4-4',
  privatedining: 'M12 3l2 5 5 1-4 4 1 5-4-2-4 2 1-5-4-4 5-1z',
};

export default function Icon({ name }) {
  const d = PATHS[name] || PATHS.concierge;
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" className="service-icon">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
