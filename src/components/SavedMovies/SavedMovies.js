import {React, useState, useEffect} from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({toggleLogin, toggleSource, toggleShowFooter}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
    toggleLogin(true);
    toggleSource(false);
    toggleShowFooter(true);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <SearchForm/>
      {isLoading &&
        <Preloader/>
      }
      {!isLoading &&
        <MoviesCardList
          isSaved={true}
        />
      }
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
    </>
  );
}

export default SavedMovies;