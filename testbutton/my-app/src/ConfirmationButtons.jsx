import React from "react";

const ConfirmationButtons = () => {
  return (
    <div className="container">
      <p className="question">Is this information correct?</p>
      <div className="button-group">
        <button className="yes-button">Yes</button>
        <button className="no-button">No?</button>
      </div>
    </div>
  );
};

export default ConfirmationButtons;
