import React from "react";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate("/");
  }

  return (
    <div className="unknown">
      <div className="unknown__wrapper">
        <h1 className="unknown__title">404</h1>
        <h2 className="unknown__subtitle">Страница не найдена</h2>
      </div>
      <button className="unknown__back" onClick={handleBackClick } type="button">Назад</button>
    </div>
  );
}

export default NotFound;