import {React} from 'react';
import Navigation from '../Navigation/Navigation';

const Header = ({ sourceMain = false, loggedIn = false, handleIconClick, handleMenuClick }) => {
  return (
    <header className={'header' + (sourceMain ? ' header_about' : '')}>
      <div className='header__nav-link'>
        <button className='header__logo' onClick={handleIconClick}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.6667C0 8.23292 0 6.01604 0.862865 4.32258C1.62186 2.83296 2.83296 1.62186 4.32258 0.862865C6.01604 0 8.23292 0 12.6667 0H25.3333C29.7671 0 31.984 0 33.6774 0.862865C35.167 1.62186 36.3781 2.83296 37.1371 4.32258C38 6.01604 38 8.23292 38 12.6667V25.3333C38 29.7671 38 31.984 37.1371 33.6774C36.3781 35.167 35.167 36.3781 33.6774 37.1371C31.984 38 29.7671 38 25.3333 38H12.6667C8.23292 38 6.01604 38 4.32258 37.1371C2.83296 36.3781 1.62186 35.167 0.862865 33.6774C0 31.984 0 29.7671 0 25.3333V12.6667Z" fill="#3DDC84"/>
            <circle cx="19" cy="19" r="11" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1538 19C15.1538 21.1242 16.8758 22.8462 19 22.8462C21.1242 22.8462 22.8462 21.1242 22.8462 19H25C25 22.3137 22.3137 25 19 25C15.6863 25 13 22.3137 13 19H15.1538Z" fill="#3DDC84"/>
          </svg>
        </button>
        {loggedIn && 
          <Navigation/>
        }
      </div>
      {!loggedIn &&
        <div className='header__profile-wrapper'>
          <button className='header__button'>Регистрация</button>
          <button className='header__button header__button_fill'>Войти</button>
        </div>
      }
      {loggedIn &&
        <div className='header__profile-wrapper'>
          <div className='header__profile'>
            <h2 className='header__title'>Аккаунт</h2>
            <span className='header__icon'>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.42985 7.96781C8.79169 7.40572 9.7501 6.06478 9.7501 4.5C9.7501 2.42893 8.07117 0.75 6.0001 0.75C3.92903 0.75 2.2501 2.42893 2.2501 4.5C2.2501 6.06473 3.20845 7.40563 4.57021 7.96775C3.17555 8.19993 1.89263 8.76594 0.80835 9.58058L2.1899 11.4194C3.25119 10.6221 4.56874 10.15 5.99986 10.15C7.43098 10.15 8.74852 10.6221 9.80981 11.4194L11.1914 9.58058C10.1072 8.76601 8.82438 8.20003 7.42985 7.96781Z" fill="white"/>
              </svg> 
            </span>
          </div>
          <button className='header__menu-button' onClick={handleMenuClick}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M36 14L8 14V11L36 11V14Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M36 24L8 24V21L36 21V24Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M36 34L8 34V31L36 31V34Z" fill="white"/>
            </svg>
          </button>
        </div>
      }
    </header>
  );
}

export default Header;