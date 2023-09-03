import {React} from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

const Main = ({ loggedIn, handleIconClick }) => {
  return (
    <>
    <Header
      sourceMain={true}
      loggedIn={loggedIn}
      handleIconClick={handleIconClick}
    />
    <Promo/>
    <AboutProject/>
    </>
  );
}

export default Main;