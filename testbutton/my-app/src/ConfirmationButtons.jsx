import React, { useState } from "react";
import "./ConfirmationButtons.css"; // Make sure you have this CSS file

const ConfirmationButtons = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <div className="button-group">
        <button
          className={selected === "yes" ? "yes-button selected" : "yes-button"}
          onClick={() => setSelected("yes")}
        >
          Yes
        </button>
        <button
          className={selected === "no" ? "no-button selected" : "no-button"}
          onClick={() => setSelected("no")}
        >
          No?
        </button>
      </div>
    </div>
  );
};

export default ConfirmationButtons;
