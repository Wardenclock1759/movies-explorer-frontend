import {React, useState, useEffect} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movies, isSaved = false, userMovies=[], handleDelete, isShort, search}) => {
  
  const [limit, setLimit] = useState(16);
  const [increment, setIncrement] = useState(0);
  const [showAddButton, setShowAddButton] = useState(false);
  
  function getFilteredMovies() {
    const shortMovies = isShort ? movies.filter((movie) => movie.duration <= 40) : movies;
    const filteredMovies = search !== "" ? shortMovies.filter((movie) => movie.nameRU.toLowerCase().includes(search.toLowerCase())) : shortMovies;
    return filteredMovies;
  }
  
  const filteredMovies = getFilteredMovies();
  const [len, setLen] = useState();

  useEffect(() => {
    setLen(filteredMovies.length);
  }, [filteredMovies]);
  
  useEffect(() => {
    const width = window.innerWidth;
    changeResolution(width);
    console.log(len)
    setShowAddButton(displayed >= len);
  }, [len]);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const width = window.innerWidth;
        changeResolution(width);
        setShowAddButton(displayed >= filteredMovies.length);
      }, 200);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [filteredMovies]);

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

  function findLike(id) {
    if (!userMovies) return false;
    return userMovies.some((movie) => movie.movieId === id);
  }

  const handleMoreClick = () => {
    const newLimit = limit + increment;
    setLimit(newLimit);
    displayed+=increment;
    setShowAddButton(displayed >= filteredMovies.length);
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
        {filteredMovies.length > 0 && 
        filteredMovies.slice(0, limit).map((movie) => {
          displayed += 1;
          const imageURL = isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
          const movieId = isSaved ? movie.movieId : movie.id;
          const liked = findLike(movieId);

          return <MoviesCard
            isMain={!isSaved}
            isLiked={liked}
            title={movie.nameRU}
            image={imageURL}
            duration={toHoursAndMinutes(movie.duration)}
            key={movieId}
            id={movieId}
            movie={movie}
            handleDeleteClick={handleDelete}
          />
          })
        }
      </ul>
      {!showAddButton && 
        <button className="list__button" type='button' onClick={handleMoreClick}>Еще</button>
      }
      {
        filteredMovies.length === 0 &&
        <p className="list__info">Фильмы не найдены</p>
      }
    </div>
  );
}

export default MoviesCardList;