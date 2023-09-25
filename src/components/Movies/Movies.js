import { React, useState, useEffect } from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({search, isChecked, setIsShortFilmChecked, setSearchQuery, movies, userMovies, setUserMovies, logout, handleClick, toggleSource, toggleShowHeader, toggleShowFooter, toggleSidebar, sidebarOpen}) => {

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleSource, toggleShowHeader, toggleShowFooter]);

  const handleLikeClick = (like, movie) => {
    if (like) {
      userMovies.push(movie);
    } else {
      setUserMovies(userMovies.filter((userMovie) => userMovie.movieId !== movie.movieId))
    }
  }

  return (
    <>
      <SearchForm setIsShortFilmChecked={setIsShortFilmChecked} setSearchQuery={setSearchQuery} query={search} isChecked={isChecked}/>
      {!isLoading &&
        <Preloader/>
      }
      {isLoading &&
        <MoviesCardList movies={movies} userMovies={userMovies} isShort={isChecked} search={search} handleLikeClick={handleLikeClick}/>
      }
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
        logout={logout}
        handleClick={handleClick}
      />
    </>
  );
}

export default Movies;