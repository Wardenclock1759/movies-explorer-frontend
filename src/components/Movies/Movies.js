import { React, useState } from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

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
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
      {/* <Preloader/> */}
    </>
  );
}

export default Movies;