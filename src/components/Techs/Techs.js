import React from "react";

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__title">
        Технологии
      </h2>
      <span className="techs__line"></span>
      <div className="techs__wrapper">
        <h3 className="techs__subtitle">
          7 технологий
        </h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className="techs__container">
        <li className="techs__tech">HTML</li>
        <li className="techs__tech">CSS</li>
        <li className="techs__tech">JS</li>
        <li className="techs__tech">React</li>
        <li className="techs__tech">Git</li>
        <li className="techs__tech">Express.js</li>
        <li className="techs__tech">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;