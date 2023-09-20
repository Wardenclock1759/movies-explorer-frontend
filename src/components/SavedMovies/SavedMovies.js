import {React, useState, useEffect} from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({sidebarOpen, toggleSidebar, handleClick, logout, toggleSource, toggleShowHeader, toggleShowFooter}) => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleSource, toggleShowHeader, toggleShowFooter]);

  return (
    <>
      <SearchForm/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList
          isSaved={true}
          movies={[]}
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