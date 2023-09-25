import {React, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Submit from "../Submit/Submit";

var reactEmailValidator = require("react-email-validator");

const Register = ({handleRegister, handleIconClick, toggleShowHeader, toggleShowFooter}) => {

  const [isLoading, setisLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateName = (name) => {
    const len = name.length;
    if (len > 0 && len < 2) {
      return 'Имя должно быть минимум 2 символа';
    }
    if (len > 30) {
      return 'Имя должно быть меньше 30 символов';
    }
    return '';
  };
  
  const validateEmail = (email) => {
    if(!reactEmailValidator.validate(email)){
      return 'Проверьте адрес электронной почты';
    }
    return '';
  };
  
  const validatePassword = (password) => {
    if (password.length < 1) {
      return 'Пароль должен быть минимум один символ';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    handleRegister(formValue.name, formValue.email, formValue.password, setisLoading);
  }

  useEffect(() => {
    toggleShowHeader(false);
    toggleShowFooter(false);
  }, [toggleShowHeader, toggleShowFooter]);

  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate("/signin");
  }

  return (
    <div className="register">
      <button className="register__logo" onClick={handleIconClick} type="button">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12.6667C0 8.23292 0 6.01604 0.862865 4.32258C1.62186 2.83296 2.83296 1.62186 4.32258 0.862865C6.01604 0 8.23292 0 12.6667 0H25.3333C29.7671 0 31.984 0 33.6774 0.862865C35.167 1.62186 36.3781 2.83296 37.1371 4.32258C38 6.01604 38 8.23292 38 12.6667V25.3333C38 29.7671 38 31.984 37.1371 33.6774C36.3781 35.167 35.167 36.3781 33.6774 37.1371C31.984 38 29.7671 38 25.3333 38H12.6667C8.23292 38 6.01604 38 4.32258 37.1371C2.83296 36.3781 1.62186 35.167 0.862865 33.6774C0 31.984 0 29.7671 0 25.3333V12.6667Z" fill="#3DDC84"/>
          <circle cx="19" cy="19" r="11" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.1538 19C15.1538 21.1242 16.8758 22.8462 19 22.8462C21.1242 22.8462 22.8462 21.1242 22.8462 19H25C25 22.3137 22.3137 25 19 25C15.6863 25 13 22.3137 13 19H15.1538Z" fill="#3DDC84"/>
        </svg>
      </button>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <div className="register__row">
          <label className="register__label">Имя</label>
          <input className="register__input" placeholder="Имя" min={2} max={30} required
          onChange={(e) => {
            setFormValue({
              ...formValue,
              name: e.target.value,
            });
            setValidationErrors({
              ...validationErrors,
              name: validateName(e.target.value),
            });
          }}/>
          <span className="register__line"></span>
          <span className="register__error">{validationErrors.name}</span>
        </div>
        <div className="register__row">
          <label className="register__label">E-mail</label>
          <input className="register__input" placeholder="Почта" required
          onChange={(e) => {
            setFormValue({
              ...formValue,
              email: e.target.value,
            });
            setValidationErrors({
              ...validationErrors,
              email: validateEmail(e.target.value),
            });
          }}/>
          <span className="register__line"></span>
          <span className="register__error">{validationErrors.email}</span>
        </div>
        <div className="register__row">
          <label className="register__label">Пароль</label>
          <input className="register__input" type="password" placeholder="Пароль" min={1} required
          onChange={(e) => {
            setFormValue({
              ...formValue,
              password: e.target.value,
            });
            setValidationErrors({
              ...validationErrors,
              password: validatePassword(e.target.value),
            });
          }}/>
          <span className="register__line"></span>
          <span className="register__error">{validationErrors.password}</span>
        </div>
      </form>
      <Submit
        buttonText={"Зарегистрироваться"}
        captionText={"Уже зарегистрированы?"}
        linkText={"Войти"}
        disabled={Object.values(validationErrors).some((error) => error !== '') || Object.values(formValue).some((value) => value === '') || isLoading}
        handleLinkClick={handleLoginClick}
        handleClick={handleSubmit}
      />
    </div>
  );
}

export default Register;