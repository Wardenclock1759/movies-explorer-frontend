import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">
        Портфолио
      </h2>
      <div className="portfolio__container">
        <a className="portfolio__link"
          href="https://github.com/Wardenclock1759"
          target="_blank"
          rel="noreferrer">
          <h3 className="portfolio__subtitle">
            Статичный сайт
          </h3>
          <span className="portfolio__icon">↗</span>
        </a>
        <span className="portfolio__line"></span>
        <a className="portfolio__link"
          href="https://github.com/Wardenclock1759"
          target="_blank"
          rel="noreferrer">
          <h3 className="portfolio__subtitle">
            Адаптивный сайт
          </h3>
          <span className="portfolio__icon">↗</span>
        </a>
        <span className="portfolio__line"></span>
        <a className="portfolio__link"
          href="https://github.com/Wardenclock1759"
          target="_blank"
          rel="noreferrer">
          <h3 className="portfolio__subtitle">
            Одностраничное приложение
          </h3>
          <span className="portfolio__icon">↗</span>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;