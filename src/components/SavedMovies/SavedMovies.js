import {React, useState, useEffect} from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MainApi from "../../utils/MainApi"

const SavedMovies = ({sidebarOpen, toggleSidebar, handleClick, logout, toggleSource, toggleShowHeader, toggleShowFooter}) => {
  const [isLoading, setisLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleSource, toggleShowHeader, toggleShowFooter]);

  useEffect(() => {
    MainApi.getSavedMovies()
    .then((Movies) => {
      setMovies(Movies);
      setisLoading(false);
    })
    .catch((error) => {
      console.error(`Error fetching movies data: ${error}`);
    });
  }, []);

  const handleDelete = (movieId) => {
    const updatedUserMovies = movies.filter((movie) => movie.movieId !== movieId);
    setMovies(updatedUserMovies);
  }

  return (
    <>
      <SearchForm/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList
          movies={movies}
          isSaved={true}
          handleDelete={handleDelete}
        />
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

export default SavedMovies;