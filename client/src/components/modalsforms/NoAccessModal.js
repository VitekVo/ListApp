import React from "react";

function NoAccessModal() {
  return (
    <div className="loading-modal">
      <div className="loading-modal-content">
        <p>
          You do not have access to this list, you are being redirected back to
          the main page...
        </p>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default NoAccessModal;
