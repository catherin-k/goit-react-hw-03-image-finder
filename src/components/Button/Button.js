import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <div className="btn__wrap">
      <button type="button" className="Button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
