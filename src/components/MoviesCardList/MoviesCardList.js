import {React, useState, useEffect} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import {
  resolutionBreakpoints,
  displayLimits,
  displayIncrements,
  movieThreshold,
  stringValues,
} from "../../utils/config";

const MoviesCardList = ({movies, isSaved = false, userMovies=[], handleDelete, isShort, search, handleLikeClick}) => {
  
  const [limit, setLimit] = useState(displayLimits.displayLimitLarge);
  const [increment, setIncrement] = useState(displayIncrements.displayIncrementInitial);
  const [showAddButton, setShowAddButton] = useState(false);
  
  function getFilteredMovies() {
    const shortMovies = isShort ? movies.filter((movie) => movie.duration <= movieThreshold) : movies;
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
    if (width >= resolutionBreakpoints.breakpointWide) {
      setIncrement(displayIncrements.displayIncrementLarge);
      setLimit(displayLimits.displayLimitLarge);
    } else if (width > resolutionBreakpoints.breakpointSmall && width < resolutionBreakpoints.breakpointWide) {
      setIncrement(displayIncrements.displayIncrementMedium);
      setLimit(displayLimits.displayLimitMedium);
    } else if (width <= resolutionBreakpoints.breakpointSmall) {
      setIncrement(displayIncrements.displayIncrementMedium);
      setLimit(displayLimits.displayLimitSmall);
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
            handleLikeClick={handleLikeClick}
          />
          })
        }
      </ul>
      {!showAddButton && 
        <button className="list__button" type='button' onClick={handleMoreClick}>Еще</button>
      }
      {
        filteredMovies.length === 0 &&
        <p className="list__info">{stringValues.moviesNotFound}</p>
      }
    </div>
  );
}

export default MoviesCardList;