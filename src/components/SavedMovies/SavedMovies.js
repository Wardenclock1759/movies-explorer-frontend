import {React, useState, useEffect} from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({isLoading, userMovies, setUserMovies, sidebarOpen, toggleSidebar, handleClick, logout, toggleSource, toggleShowHeader, toggleShowFooter}) => {

  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleSource, toggleShowHeader, toggleShowFooter]);

  const handleDelete = (movieId) => {
    const updatedUserMovies = userMovies.filter((movie) => movie.movieId !== movieId);
    setUserMovies(updatedUserMovies);
  }

  return (
    <>
      <SearchForm setIsShortFilmChecked={setIsShortFilmChecked} setSearchQuery={setSearchQuery} isChecked={isShortFilmChecked} isSaved={true}/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList
          movies={userMovies}
          isSaved={true}
          handleDelete={handleDelete}
          isShort={isShortFilmChecked}
          search={searchQuery}
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