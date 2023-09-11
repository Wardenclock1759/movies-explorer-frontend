import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";

const ProfileEdit = ({loggedIn, handleIconClick}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExitClick = () => {
    navigate('/', {replace: true})
  }
  
  return (
    <>
      <Header
        sourceMain={false}
        loggedIn={loggedIn}
        handleIconClick={handleIconClick}
        handleMenuClick={toggleSidebar}
      />
      <div className="edit">
        <h1 className="edit__title">
          Привет, Михаил!
        </h1>
        <form className="edit__form">
          <div className="edit__row">
            <label className="edit__subtitle">
              Имя
            </label>
            <input className="edit__input" placeholder="Имя" defaultValue={"Михаил"}/>
          </div>
          <span className="edit__line"></span>
          <div className="edit__row">
            <label className="edit__subtitle">
              E-mail
            </label>
            <input className="edit__input" placeholder="Почта" defaultValue={"wardenclock@gmail.com"}/>
          </div>
        </form>
        <button className="edit__button edit__button_submit" type="submit">Редактировать</button>
        <button className="edit__button edit__button_exit" type="button" onClick={handleExitClick}>Выйти из аккаунта</button>
      </div>
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
      />
    </>
  );
}

export default ProfileEdit;