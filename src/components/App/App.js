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
import MoviesApi from "../../utils/MoviesApi"
import ProtectedRoute from '../ProtectedRoute';

const App = () => {
  const [sourceMain, setSourceMain] = useState(true);
  const [loggedIn, setLoggedin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [showHeader, setshowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);

  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  const handleRegisterClick = () => {
    navigate('/signup');
  }

  const handleLoginClick = () => {
    navigate('/signin');
  }

  useEffect(() => {
    handleTokenCheck();
  }, [])

  useEffect(() => {
    if (loggedIn) {
      MoviesApi.getMovies()
      .then((Movies) => {
        setMovies(Movies);
      })
      .catch((error) => {
        console.error(`Error fetching movies data: ${error}`);
      });
      MainApi.getSavedMovies()
      .then((Movies) => {
        setUserMovies(Movies);
      })
      .catch((error) => {
        console.error(`Error fetching movies data: ${error}`);
      });
    }    
  }, [loggedIn]);

  useEffect(() => {
    const savedSwitcherValue = localStorage.getItem("isShortFilmChecked");
    if (savedSwitcherValue !== null) {
      setIsShortFilmChecked(JSON.parse(savedSwitcherValue));
    }

    const savedSearchQuery = localStorage.getItem("searchQuery");
    if (savedSearchQuery !== null) {
      setSearchQuery(savedSearchQuery);
    }
  }, [])

const handleTokenCheck = () => {
  MainApi.checkToken().then((res) => {
    if (res){
      setLoggedin(true);
      setCurrentUser(res.user);
      setName(res.user.name);
      setEmail(res.user.email);
    }
  }).catch(err => console.log(err));
}

const handleRegister = (name, email, password, setisLoading) => {
  MainApi.register(name, email, password).then((res) => {
    setLoggedin(true);
    setCurrentUser(res.user);
    setName(res.user.name);
    setEmail(res.user.email);
    navigate('/movies');
  }).catch(() => {
    setLoggedin(false);
  }).finally(() => {
    setisLoading(false);
  });
}

const handleLogin = (email, password, setisLoading) => {
  MainApi.authorize(email, password)
    .then((res) => {
      setLoggedin(true);
      setCurrentUser(res.user);
      setName(res.user.name);
      setEmail(res.user.email);
      navigate('/movies');
  }).catch(() => {
  }).finally(() => {
    setisLoading(false);
  });
}

const handleEdit = (name, email, oldName, oldEmail, setNameMessage, setEmailMessage, setisLoading) => {
  MainApi.setProfileInfo({name: name, email: email})
    .then((res) => {
      console.log(res)
      setName(res.user.name);
      setEmail(res.user.email);
      if (name !== oldName) {
        setNameMessage("Имя изменено");
      }
      if (email !== oldEmail) {
        setEmailMessage("Почта изменена");
      }
  }).catch(() => {
  }).finally(() => {
    setisLoading(false);
  });
}

const onLogOut = async () => {
  try {
    await MainApi.logout();
    setLoggedin(false);
    setCurrentUser(null);
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

const handleProfileClick = () => {
  setLoggedin(true);
  navigate('/profile');
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
          <Route path="/movies" element={<ProtectedRoute element={Movies} setSearchQuery={setSearchQuery} setIsShortFilmChecked={setIsShortFilmChecked} search={searchQuery} isChecked={isShortFilmChecked} movies={movies} userMovies={userMovies} setUserMovies={setUserMovies} loggedIn={loggedIn} handleClick={handleProfileClick} logout={handleIconClick} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} userMovies={userMovies} setUserMovies={setUserMovies} loggedIn={loggedIn} handleClick={handleProfileClick} logout={handleIconClick} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter}/>} />
          <Route path="/profile" element={<ProtectedRoute element={ProfileEdit} handleEdit={handleEdit} loggedIn={loggedIn} sidebarOpen={sidebarOpen} andleClick={handleProfileClick} logout={handleIconClick} toggleSidebar={toggleSidebar} handleLogout={onLogOut} toggleLogin={toggleLogin} toggleSource={toggleSource} toggleShowHeader={toggleShowHeader} toggleShowFooter={toggleShowFooter} name={name} email={email}/>} />
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