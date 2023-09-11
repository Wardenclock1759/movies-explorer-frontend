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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showHeader, setshowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const toggleSource = (value = true) => {
    setSourceMain(value);
  };

  const toggleLogin = (value = true) => {
    setLoggedin(value);
  };

  const toggleShowFooter = (value = true) => {
    setShowFooter(value);
  };

  const toggleShowHeader = (value = true) => {
    setshowHeader(value);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
    {
      showHeader && 
      <Header
        sourceMain={sourceMain}
        loggedIn={loggedIn}
        handleMenuClick={toggleSidebar}
        handleIconClick={handleIconClick}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
    }
      <main className="page">
        <Routes>
          <Route path="/" element={<Main toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/movies" element={<Movies sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/saved-movies" element={<SavedMovies sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/profile" element={<ProfileEdit sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/signup" element={<Register handleIconClick={handleIconClick} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/signin" element={<Login handleIconClick={handleIconClick} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="*" element={<NotFound toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
        </Routes>
      </main>
      {showFooter && <Footer/>}
    </>
  );
}

export default App;