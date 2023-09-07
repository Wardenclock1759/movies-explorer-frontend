import { React, useState, useEffect } from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({loggedIn, handleIconClick}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header
        sourceMain={false}
        loggedIn={loggedIn}
        handleIconClick={handleIconClick}
        handleMenuClick={toggleSidebar}
      />
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