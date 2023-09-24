import { React, useState, useEffect } from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi"
import MainApi from "../../utils/MainApi"

const Movies = ({movies, userMovies, setUserMovies, logout, handleClick, toggleSource, toggleShowHeader, toggleShowFooter, toggleSidebar, sidebarOpen}) => {

  const [isLoading, setisLoading] = useState(true);
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleSource, toggleShowHeader, toggleShowFooter]);

  useEffect(() => {
    const savedSwitcherValue = localStorage.getItem("isShortFilmChecked");
    if (savedSwitcherValue !== null) {
      setIsShortFilmChecked(JSON.parse(savedSwitcherValue));
    }

    const savedSearchQuery = localStorage.getItem("searchQuery");
    if (savedSearchQuery !== null) {
      setSearchQuery(savedSearchQuery);
    }
  }, [])

  const handleLikeClick = (like, movie) => {
    if (like) {
      userMovies.push(movie);
    } else {
      setUserMovies(userMovies.filter((userMovie) => userMovie.movieId !== movie.movieId))
    }
  }

  return (
    <>
      <SearchForm setIsShortFilmChecked={setIsShortFilmChecked} setSearchQuery={setSearchQuery} query={searchQuery} isChecked={isShortFilmChecked}/>
      {!isLoading &&
        <Preloader/>
      }
      {isLoading &&
        <MoviesCardList movies={movies} userMovies={userMovies} isShort={isShortFilmChecked} search={searchQuery} handleLikeClick={handleLikeClick}/>
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