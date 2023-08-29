import React from "react";
import Header from "../Header/Header";

const Movies = ({loggedIn, handleIconClick}) => {
  return (
    <Header
      sourceMain={false}
      loggedIn={loggedIn}
      handleIconClick={handleIconClick}
    />
  );
}

export default Movies;