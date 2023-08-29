import { React, useState } from "react";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";

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
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
    </>
  );
}

export default Movies;