import {React} from 'react';
import Header from '../Header/Header';

const Main = ({ loggedIn, handleIconClick }) => {
  return (
    <Header
      sourceMain={true}
      loggedIn={loggedIn}
      handleIconClick={handleIconClick}
    />
  );
}

export default Main;