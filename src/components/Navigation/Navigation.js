import {React} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink
        to="/movies"
        className={({ isActive, isPending }) =>
          isPending ? "navigation__link" : isActive ? "navigation__link navigation__link_active" : "navigation__link"
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive, isPending }) =>
          isPending ? "navigation__link" : isActive ? "navigation__link navigation__link_active" : "navigation__link"
        }
      >
        Сохраненные фильмы
      </NavLink>
    </nav> 
  );
}

export default Navigation;