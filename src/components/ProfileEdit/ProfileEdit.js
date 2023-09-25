import {React, useEffect, useState} from "react";
import NavTab from "../NavTab/NavTab";
var reactEmailValidator = require("react-email-validator");

const ProfileEdit = ({handleEdit, handleLogout, sidebarOpen, logout, handleClick, toggleSidebar, toggleSource, toggleShowHeader, toggleShowFooter, name, email}) => {

  const [isFormModified, setIsFormModified] = useState(false);
  const [nameSuccessMessage, setNameMessage] = useState("");
  const [emailSuccessMessage, setEmailMessage] = useState("");

  useEffect(() => {
    toggleSource(false);
    toggleShowHeader(true);
    toggleShowFooter(false);
  }, [toggleSource, toggleShowHeader, toggleShowFooter])

  const [formValue, setFormValue] = useState({
    name: name,
    email: email,
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
  });

  const validateName = (newName) => {
    const len = newName.length;
    if (newName === name) return '1';
    if (len >= 0 && len < 2) {
      return 'Имя должно быть минимум 2 символа';
    }
    if (len > 30) {
      return 'Имя должно быть меньше 30 символов';
    }
    return '';
  };
  
  const validateEmail = (newEmail) => {
    if (newEmail === email) return '1';
    if(!reactEmailValidator.validate(newEmail)){
      return 'Проверьте адрес электронной почты';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formValue.name, formValue.email, name, email, setNameMessage, setEmailMessage);
    setIsFormModified(false);
  }

  return (
    <>
      <section className="edit">
        <h1 className="edit__title">
          {`Привет, ${name}!`}
        </h1>
        <form className="edit__form">
          <div className="edit__row">
            <label className="edit__subtitle">
              Имя
            </label>
            <input className="edit__input" placeholder="Имя" defaultValue={name}
            onChange={(e) => {
            setFormValue({
              ...formValue,
              name: e.target.value,
            });
            setValidationErrors({
              ...validationErrors,
              name: validateName(e.target.value),
            });
            setIsFormModified(true);
            }}/>
          </div>
          <span className="edit__error">{nameSuccessMessage}</span>
          <span className="edit__line"></span>
          <div className="edit__row">
            <label className="edit__subtitle">
              E-mail
            </label>
            <input className="edit__input" placeholder="Почта" defaultValue={email}
            onChange={(e) => {
              setFormValue({
                ...formValue,
                email: e.target.value,
              });
              setValidationErrors({
                ...validationErrors,
                email: validateEmail(e.target.value),
              });
              setIsFormModified(true);
            }}/>
          </div>
          <span className="edit__error">{emailSuccessMessage}</span>
        </form>
        <button className="edit__button edit__button_submit" type="submit" onClick={handleSubmit} disabled={Object.values(validationErrors).some((error) => error !== '') || !isFormModified}>Редактировать</button>
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