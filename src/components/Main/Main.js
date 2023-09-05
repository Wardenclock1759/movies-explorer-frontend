import {React} from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

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
    <Techs/>
    <AboutMe/>
    <Portfolio/>
    </>
  );
}

export default Main;