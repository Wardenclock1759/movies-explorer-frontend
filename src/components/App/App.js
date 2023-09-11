import {React, useState} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {
  const [sourceMain, setSourceMain] = useState(true);
  const [loggedIn, setLoggedin] = useState(false);

  const toggleSource = () => {
    setSourceMain(!sourceMain);
  };

  const toggleLogin = () => {
    setLoggedin(!loggedIn);
  };

  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/', { replace: true });
  }

  const handleRegisterClick = () => {
    navigate('/signup', { replace: true });
  }

  const handleLoginClick = () => {
    navigate('/signin', { replace: true });
  }

  return (
    <>
      <Header
        sourceMain={sourceMain}
        loggedIn={loggedIn}
        handleIconClick={handleIconClick}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
      <main className="page">
        <Routes>
          <Route path="/" element={<Main handleIconClick={handleIconClick} handleRegisterClick={handleRegisterClick} handleLoginClick={handleLoginClick}/>} />
          <Route path="/movies" element={<Movies loggedIn={true} handleIconClick={handleIconClick}/>} />
          <Route path="/saved-movies" element={<SavedMovies loggedIn={true} handleIconClick={handleIconClick}/>} />
          <Route path="/profile" element={<ProfileEdit loggedIn={true} handleIconClick={handleIconClick}/>} />
          <Route path="/signup" element={<Register handleIconClick={handleIconClick}/>} />
          <Route path="/signin" element={<Login handleIconClick={handleIconClick}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;