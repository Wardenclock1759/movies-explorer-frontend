import { React, useState, useEffect } from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesApi from "../../utils/MoviesApi"

const Movies = ({toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter, toggleSidebar, sidebarOpen}) => {

  const [isLoading, setisLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    toggleLogin(true);
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter]);

  useEffect(() => {
    MoviesApi.getMovies()
    .then((Movies) => {
      setMovies(Movies);
      setisLoading(false);
    })
    .catch((error) => {
      console.error(`Error fetching movies data: ${error}`);
    });
  }, []);

  return (
    <>
      <SearchForm/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList movies={movies}/>
      }
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
    </>
  );
}

export default Movies;