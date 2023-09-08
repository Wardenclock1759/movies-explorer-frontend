import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <span className="footer__line"></span>
      <div className="footer__wrapper">
        <p className="footer__text">&copy; 2023</p>
        <div className="footer__links">
        <a className="footer__text footer__text_link"
          href="https://practicum.yandex.ru/"
          target="_blank"
          rel="noreferrer">
          Яндекс.Практикум
        </a>
        <a className="footer__text footer__text_link"
          href="https://github.com/Wardenclock1759"
          target="_blank"
          rel="noreferrer">
          Github
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;