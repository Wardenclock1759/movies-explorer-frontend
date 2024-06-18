import React from "react";

const Submit = ({buttonText, captionText, linkText, disabled, handleLinkClick, handleClick}) => {
  return (
    <div className="submit">
      <button className="submit__button" type="submit" onClick={handleClick} disabled={disabled}>
        {buttonText}
      </button>
      <p className="submit__text">{captionText} <span className="submit__text submit__text_link" onClick={handleLinkClick}>{linkText}</span></p>
    </div>
  );
}

export default Submit;