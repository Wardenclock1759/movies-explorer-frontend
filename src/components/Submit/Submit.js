import React from "react";

const Submit = ({buttonText, captionText, linkText, handleLinkClick}) => {
  return (
    <div className="submit">
      <button className="submit__button" type="submit">
        {buttonText}
      </button>
      <p className="submit__text">{captionText} <span className="submit__text submit__text_link" onClick={handleLinkClick}>{linkText}</span></p>
    </div>
  );
}

export default Submit;