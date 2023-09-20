import {React, useState, useEffect} from "react";
import NavTab from "../NavTab/NavTab";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
    toggleLogin(true);
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(true);
  }, [toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter]);

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
          movies={[]}
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