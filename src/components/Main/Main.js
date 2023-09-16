import {React, useEffect} from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = ({toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter}) => {
  useEffect(() => {
    toggleLogin(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
    toggleSource(true);
  }, [toggleLogin, toggleSource, toggleShowFooter, toggleShowHeader]);

  return (
    <>
    <Promo/>
    <AboutProject/>
    <Techs/>
    <AboutMe/>
    <Portfolio/>
    </>
  );
}

export default Main;