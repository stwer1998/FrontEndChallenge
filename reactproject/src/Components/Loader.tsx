import React from "react";

function Loader() {
  return (
    <div className="loader-container" id="loader" aria-label="Wait for loading">
      <div className="yellow"></div>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="violet"></div>
    </div>
  );
}

export default Loader;
