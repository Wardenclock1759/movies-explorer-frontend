import React from "react";

const AboutProject = () => {
  return (
    <div className="project">
      <h2 className="project__title">
        О проекте
      </h2>
      <span className="project__line"></span>
      <div className="project__container">
        <div className="project__column">
          <h3 className="project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__column">
          <h3 className="project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
        </div>
      </div>
      <div className="project__timeline-wrapper">
        <span className="project__timeline project__timeline_active">1 неделя</span>
        <span className="project__timeline">4 недели</span>
        <p className="project__text project__text_grey">
          Back-end
        </p>
        <p className="project__text project__text_grey">
          Front-end
        </p>
      </div>
    </div>
  );
}

export default AboutProject;