import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NavTab from "../NavTab/NavTab";

const ProfileEdit = ({toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    toggleLogin(true);
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(false);
  }, [toggleLogin, toggleSource, toggleShowHeader, toggleShowFooter])

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExitClick = () => {
    navigate('/', {replace: true})
  }
  
  return (
    <>
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