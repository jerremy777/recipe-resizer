import React from 'react';

function Resizer() {
  return (
    <div id="resizer-content" className="content">
      <div id="resizer-controls">
        <input type="range" id="resizer-input" min="0.1" max="5" />
      </div>
      <div id="resizer-options">
        <button type="button" id="reset-button">
          reset
        </button>
        <button type="button" id="reset-button">
          save
        </button>
        <button type="button" id="reset-button">
          load
        </button>
        <button type="button" id="reset-button">
          share
        </button>
      </div>
    </div>

  );
}

export default Resizer;
