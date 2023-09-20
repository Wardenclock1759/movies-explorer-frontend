import {React, useEffect} from "react";
import NavTab from "../NavTab/NavTab";

const ProfileEdit = ({handleLogout, sidebarOpen, logout, handleClick, toggleSidebar, toggleSource, toggleShowHeader, toggleShowFooter}) => {
  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(false);
  }, [toggleSource, toggleShowHeader, toggleShowFooter])
  
  return (
    <>
      <section className="edit">
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
        <button className="edit__button edit__button_exit" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
      </section>
      <NavTab
        opened={sidebarOpen}
        handleClose={toggleSidebar}
        logout={logout}
        handleClick={handleClick}
      />
    </>
  );
}

export default ProfileEdit;