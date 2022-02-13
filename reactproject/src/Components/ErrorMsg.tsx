import React from "react";

const ErrorMsg: React.FC = () => {
  return (
    <div
      className="error-msg-container"
      id="errorContainer"
      aria-label="Please refresh this page there was an error!"
    >
      <p className="error-msg" id="error-msg">
        Please refresh this page there was an error!
      </p>
    </div>
  );
};

export default ErrorMsg;
