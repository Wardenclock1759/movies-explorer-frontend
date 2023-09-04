import React from "react";
import profileImage from "../../images/profile.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <h2 className="about__title">
        Студент
      </h2>
      <span className="about__line"></span>
      <div className="about__main">
        <div className="about__info">
          <h3 className="about__name">
            Михаил
          </h3>
          <h4 className="about__status">
            Фронтенд-разработчик, 23 года
          </h4>
          <p className="about__text">
            Живу в Перми, закончил факультет Бизнес-Информатики в НИУ ВШЭ Пермь. Сейчас обучаюсь в магистратуре на одноименном направлении. Свободно владею английским, что позволяет быстро находить информацию в документации. Помимо этого, имею опыт работы с инструментами от OpenAI, Github Copilot и Google. 
            Сейчас работаю в компании ServisePipe. Параллельно работаю над стартапом в IT.
          </p>
          <a className="about__link"
            href="https://github.com/Wardenclock1759"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about__image" src={profileImage} alt="Профессиональное фото"/>
      </div>
    </div>
  );
}

export default AboutMe;