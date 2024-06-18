import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";

import {
  routesValues,
} from "../../utils/config";

const NavTab = ({logout, handleClick, opened = false, handleClose }) => {

  const handleCloseClick = () => {
    handleClose();
    handleClick();
  }

  const handleLogoutClick = () => {
    handleClose();
    logout();
  }

  return (
    <div className={'navtab' + (opened ? ' navtab_opened' : '')}>
      <div className="navtab__container">
        <button className="navtab__close" onClick={handleClose} type='button'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="white"/>
            <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="white"/>
          </svg>
        </button>
        <nav className='navtab-wrapper'>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "navtab__link" : isActive ? "navtab__link navtab__link_active" : "navtab__link"
            }
            onClick={handleLogoutClick}
          >
            {routesValues.main}
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive, isPending }) =>
              isPending ? "navtab__link" : isActive ? "navtab__link navtab__link_active" : "navtab__link"
            }
            onClick={handleClose}
          >
            {routesValues.movies}
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive, isPending }) =>
              isPending ? "navtab__link" : isActive ? "navtab__link navtab__link_active" : "navtab__link"
            }
            onClick={handleClose}
          >
            {routesValues.savedMovies}
          </NavLink>
        </nav>
        <Profile isMenu={true} handleClick={handleCloseClick}/>
      </div>
    </div>
  );
}

export default NavTab;