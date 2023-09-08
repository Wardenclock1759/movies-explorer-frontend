import {React} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

const App = () => {
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
  );
}

export default App;