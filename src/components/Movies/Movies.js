import { React, useState, useEffect } from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi"
import MainApi from "../../utils/MainApi"

const Movies = ({logout, handleClick, toggleSource, toggleShowHeader, toggleShowFooter, toggleSidebar, sidebarOpen}) => {

  const [isLoading, setisLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleSource, toggleShowHeader, toggleShowFooter]);

  useEffect(() => {
    MoviesApi.getMovies()
    .then((Movies) => {
      setMovies(Movies);
    })
    .catch((error) => {
      console.error(`Error fetching movies data: ${error}`);
    });
    MainApi.getSavedMovies()
    .then((Movies) => {
      setUserMovies(Movies);
      setisLoading(false);
    })
    .catch((error) => {
      console.error(`Error fetching movies data: ${error}`);
    });
  }, []);

  useEffect(() => {
    const savedSwitcherValue = localStorage.getItem("isShortFilmChecked");
    if (savedSwitcherValue !== null) {
      console.log(JSON.parse(savedSwitcherValue))
      setIsShortFilmChecked(JSON.parse(savedSwitcherValue));
    }

    const savedSearchQuery = localStorage.getItem("searchQuery");
    if (savedSearchQuery !== null) {
      setSearchQuery(savedSearchQuery);
    }
  }, [])

  return (
    <>
      <SearchForm setIsShortFilmChecked={setIsShortFilmChecked} setSearchQuery={setSearchQuery} query={searchQuery} isChecked={isShortFilmChecked}/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList movies={movies} userMovies={userMovies} isShort={isShortFilmChecked} search={searchQuery}/>
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