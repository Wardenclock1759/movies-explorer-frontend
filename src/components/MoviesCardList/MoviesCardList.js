import {React, useState, useEffect} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movies}) => {

  const [limit, setLimit] = useState(16);
  const [increment, setIncrement] = useState(0);
  const [showAddButton, setShowAddButton] = useState(false);

  let displayed = 0;

  const changeResolution = (width) => {
    if (width >= 1280) {
      setIncrement(4);
      setLimit(16);
    } else if (width > 767 && width < 1280) {
      setIncrement(2);
      setLimit(8);
    } else if (width <= 767) {
      setIncrement(2);
      setLimit(5);
    }
  }

  useEffect(() => {
    const width = window.innerWidth;
    changeResolution(width);
    setShowAddButton(displayed > movies.length);
  }, [displayed, movies]);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const width = window.innerWidth;
        changeResolution(width);
      }, 200);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMoreClick = () => {
    setLimit(limit + increment);
    displayed += increment;
    setShowAddButton(displayed >= movies.length);
  }

  function toHoursAndMinutes(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    if (hours === 0) {
      return `${minutes}м`;
    }

    return `${hours}ч ${minutes}м`;
  }

  return (
    <div className="list">
      <ul className="list__wrapper">
        {movies.length > 0 && displayed <= limit && 
        movies.slice(0, limit).map((movie) => {
          displayed += 1;
          return <MoviesCard
            isMain={true}
            isLiked={false}
            title={movie.nameRU}
            image={`https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
            duration={toHoursAndMinutes(movie.duration)}
            key={movie.id}
          />
          })
        }
      </ul>
      {!showAddButton && 
        <button className="list__button" type='button' onClick={handleMoreClick}>Еще</button>
      }
    </div>
  );
}

export default MoviesCardList;