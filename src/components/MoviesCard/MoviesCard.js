import {React, useState} from "react";
import MainApi from "../../utils/MainApi";

const MoviesCard = ({isMain = true, isLiked, title, image, duration, movie, id, handleDeleteClick, handleLikeClick}) => {
  const [Liked, setLiked] = useState(isLiked);
  const [movieId, setId] = useState(id);

  const handleLike = () => {
    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: image,
      trailer: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.trailerLink,
      movieId: movie.id,
    }

    if (!Liked) {
      MainApi.addMovie(newMovie)
      .then(() => {
        setLiked(true);
        setId(newMovie.movieId);
        handleLikeClick(true, newMovie);
      })
      .catch((error) => {
        console.error(`Error adding new movie: ${error}`);
      });
    } else {
      MainApi.removeMovie(newMovie.movieId)
      .then(() => {
        setLiked(false);
        handleLikeClick(false, newMovie);
      })
      .catch((error) => {
        console.error(`Error deleting movie: ${error}`);
      });
    }
  };

  const handleDelete = () => {
    MainApi.removeMovie(movieId)
      .then(() => {
        setLiked(false);
        handleDeleteClick(movieId);
      })
      .catch((error) => {
        console.error(`Error deleting movie: ${error}`);
      });
  };

  const imageAlt = `Постер фильма: ${title}`;

  return (
    <div className="card">
      <img className="card__image" src={image} alt={imageAlt}></img>
      <div className="card__title-wrapper">
        <h2 className="card__title">{title}</h2>
        {isMain &&
          <button className={Liked ? 'card__button card__button_liked' : 'card__button'} onClick={handleLike} type='button'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#313131"/>
              <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="white"/>
            </svg>
          </button>
        }
        {!isMain &&
          <button className='card__button card__button_close' type='button' onClick={handleDelete}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5.06055L6.65156 7.71211L7.71222 6.65145L5.06066 3.99989L7.71211 1.34844L6.65145 0.287781L4 2.93923L1.34826 0.287484L0.287598 1.34814L2.93934 3.99989L0.287484 6.65174L1.34814 7.7124L4 5.06055Z" fill="white"/>
            </svg>
          </button>
        }
      </div>
      <div className="card__wrapper">
        <span className="card__line"></span>
        <h3 className="card__duration">{duration}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;