import {React, useState, useEffect} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

import CurrentUserContext from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';

const App = () => {
  const [sourceMain, setSourceMain] = useState(true);
  const [loggedIn, setLoggedin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleIconClick = async () => {
    try {
      await MainApi.logout();
      setLoggedin(false);
      setCurrentUser(null);
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  const handleRegisterClick = () => {
    navigate('/signup', { replace: true });
  }

  const handleLoginClick = () => {
    navigate('/signin', { replace: true });
  }

  useEffect(() => {
    handleTokenCheck();
  }, [])

const handleTokenCheck = () => {
  MainApi.checkToken().then((res) => {
    if (res){
      setLoggedin(true);
      setCurrentUser(res.user);
      navigate("/movies", {replace: true});
    }
  }).catch(err => console.log(err));
}

const handleRegister = (name, email, password) => {
  MainApi.register(name, email, password).then((res) => {
    setLoggedin(true);
    console.log('Register OK')
    setCurrentUser(res.user);
    navigate('/movies', {replace: true});
  }).catch(() => {
    setLoggedin(false);
  });
}

const handleLogin = (email, password) => {
  MainApi.authorize(email, password)
    .then((res) => {
      setLoggedin(true);
      setCurrentUser(res.user);
      navigate('/movies', { replace: true });
  }).catch(() => {
  });
}

const onLogOut = async () => {
  try {
    await MainApi.logout();
    setLoggedin(false);
    setCurrentUser(null);
    navigate('/signin', { replace: true });
  } catch (err) {
    console.log(err);
  }
};

const handleProfileClick = () => {
  setLoggedin(true);
  navigate('/profile', { replace: true });
};

  return (
    <CurrentUserContext.Provider value={currentUser}>
    {
      showHeader && 
      <Header
        sourceMain={sourceMain}
        loggedIn={loggedIn}
        handleMenuClick={toggleSidebar}
        handleIconClick={handleIconClick}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
        handleClick={handleProfileClick}
      />
    }
      <main className="page">
        <Routes>
          <Route path="/" element={<Main toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={loggedIn} handleClick={handleProfileClick} logout={handleIconClick} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} handleClick={handleProfileClick} logout={handleIconClick} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/profile" element={<ProtectedRoute element={ProfileEdit} loggedIn={loggedIn} sidebarOpen={sidebarOpen} andleClick={handleProfileClick} logout={handleIconClick} toggleSidebar={toggleSidebar} handleLogout={onLogOut} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} handleIconClick={handleIconClick} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} handleIconClick={handleIconClick} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="*" element={<NotFound toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
        </Routes>
      </main>
      {showFooter && <Footer/>}
    </CurrentUserContext.Provider>
  );
}

export default App;