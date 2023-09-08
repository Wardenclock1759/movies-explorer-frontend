import {React} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import image1 from "../../images/films1.png"
import image2 from "../../images/flims2.png"
import image3 from "../../images/flims3.png"
import image4 from "../../images/flims4.png"
import image5 from "../../images/flims5.png"
import image6 from "../../images/flims6.png"
import image7 from "../../images/flims7.png"
import image8 from "../../images/flims8.png"
import image9 from "../../images/flims9.png"
import image10 from "../../images/flims10.png"
import image11 from "../../images/flims11.png"
import image12 from "../../images/flims12.png"
import image13 from "../../images/flims13.png"
import image14 from "../../images/flims14.png"
import image15 from "../../images/flims15.png"
import image16 from "../../images/flims16.png"

const MoviesCardList = ({isSaved = false}) => {
  const title1 = "33 слова о дизайне";
  const title2 = "Киноальманах «100 лет дизайна»";
  const title3 = "В погоне за Бенкси";
  const title4 = "Баския: Взрыв реальности";
  const title5 = "Бег это свобода";
  const title6 = "Книготорговцы";
  const title7 = "Когда я думаю о Германии ночью";
  const title8 = "Gimme Danger: История Игги и The Stooges";
  const title9 = "Дженис: Маленькая девочка грустит";
  const title10 = "Соберись перед прыжком";
  const title11 = "Пи Джей Харви: A dog called money";
  const title12 = "По волнам: Искусство звука в кино";
  const title13 = "Рудбой";
  const title14 = "Скейт — кухня";
  const title15 = "Война искусств";
  const title16 = "Зона";
  const duration = "1ч 42м"

  return (
    <div className="list">
      {!isSaved &&
      <div className="list__wrapper">
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title1}
          image={image1}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title2}
          image={image2}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title3}
          image={image3}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title4}
          image={image4}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title5}
          image={image5}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title6}
          image={image6}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title7}
          image={image7}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title8}
          image={image8}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title9}
          image={image9}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title10}
          image={image10}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title11}
          image={image11}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title12}
          image={image12}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title13}
          image={image13}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title14}
          image={image14}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title15}
          image={image15}
          duration={duration}
        />
        <MoviesCard
          isMain={true}
          isLiked={false}
          title={title16}
          image={image16}
          duration={duration}
        />
      </div>
      }
      {!isSaved && 
        <button className="list__button">Еще</button>
      }
      {isSaved && 
        <div className="list__wrapper">
          <MoviesCard
            isMain={false}
            isLiked={false}
            title={title1}
            image={image1}
            duration={duration}
          />
          <MoviesCard
            isMain={false}
            isLiked={false}
            title={title2}
            image={image2}
            duration={duration}
          />
          <MoviesCard
            isMain={false}
            isLiked={false}
            title={title3}
            image={image3}
            duration={duration}
          />
        </div>
      }
    </div>
  );
}

export default MoviesCardList;