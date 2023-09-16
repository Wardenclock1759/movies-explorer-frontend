import { React, useState, useEffect } from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter, toggleSidebar, sidebarOpen}) => {

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
    toggleLogin(true);
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter]);  

  return (
    <>
      <SearchForm/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList/>
      }
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
    </>
  );
}

export default Movies;