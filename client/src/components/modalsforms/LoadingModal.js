import React from "react";

function LoadingModal({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="loading-modal">
      <div className="loading-modal-content">
        <p>Please wait, loading data from server...</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default LoadingModal;
