import {React} from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = ({ loggedIn, handleIconClick, handleRegisterClick, handleLoginClick }) => {
  return (
    <>
    <Header
      sourceMain={true}
      loggedIn={loggedIn}
      handleIconClick={handleIconClick}
      handleRegisterClick={handleRegisterClick}
      handleLoginClick={handleLoginClick}
    />
    <Promo/>
    <AboutProject/>
    <Techs/>
    <AboutMe/>
    <Portfolio/>
    <Footer/>
    </>
  );
}

export default Main;