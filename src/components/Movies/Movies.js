import { React, useState } from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({loggedIn, handleIconClick}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <MoviesCardList/>
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
      {/* <Preloader/> */}
    </>
  );
}

export default Movies;