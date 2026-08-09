import React, { useRef } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap.js';

/**
 * Generic accessible modal shell used by Room, Dining, and Spa detail views.
 * - Closes on ESC and on backdrop click
 * - Traps focus while open and restores it to the trigger on close
 * - Exposes proper ARIA attributes for screen readers
 */
export default function Modal({ isOpen, onClose, labelledBy, children }) {
  const containerRef = useRef(null);
  useFocusTrap(containerRef, isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        ref={containerRef}
        tabIndex={-1}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
