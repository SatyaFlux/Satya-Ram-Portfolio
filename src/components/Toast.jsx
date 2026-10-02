import React from 'react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast visible">
          <span className="toast-dot" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

