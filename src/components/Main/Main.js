import {React} from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';

const Main = ({ loggedIn, handleIconClick }) => {
  return (
    <>
    <Header
      sourceMain={true}
      loggedIn={loggedIn}
      handleIconClick={handleIconClick}
    />
    <Promo/>
    </>
  );
}

export default Main;