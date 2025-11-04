import React from 'react';

const Toast = ({ toasts, onDismiss }) => {
  if (!toasts?.length) {
    return null;
  }

  return (
    <div className="toast-stack">
      {toasts.map(({ id, message, type }) => (
        <div key={id} className={`notification ${type || 'is-info'} is-light toast-item`} role="status">
          <div className="is-flex is-align-items-center is-justify-content-space-between gap-sm">
            <span>{message}</span>
            <button
              type="button"
              className="delete"
              aria-label="Dismiss notification"
              onClick={() => onDismiss?.(id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
