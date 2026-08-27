import React from "react";

const PageTransition = ({ isActive, direction }) => (
  <div
    className={`mode-transition ${isActive ? "is-active" : ""} ${direction === "creative" ? "to-creative" : "to-professional"}`}
    aria-hidden="true"
  >
    <div className="mode-transition-wash" />
    <div className="mode-transition-mark">SG</div>
  </div>
);

export default PageTransition;
