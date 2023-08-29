import {React} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';

const App = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/', { replace: true });
  }

  return (
    <main className="page">
      <Routes>
        <Route path="/" element={<Main handleIconClick={handleIconClick}/>} />
        <Route path="/movies" element={<Movies loggedIn={true} handleIconClick={handleIconClick}/>} />
      </Routes>
    </main>
  );
}

export default App;