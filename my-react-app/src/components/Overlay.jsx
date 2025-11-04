import React from 'react';

const Overlay = ({ isOpen, onClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className="nav-overlay is-active"
      role="presentation"
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default Overlay;
