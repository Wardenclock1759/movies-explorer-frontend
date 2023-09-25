import {React, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const NotFound = ({toggleShowHeader, toggleShowFooter}) => {

  const navigate = useNavigate();

  useEffect(() => {
    toggleShowHeader(false);
    toggleShowFooter(false);
  }, [toggleShowHeader, toggleShowFooter])
  
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <section className="unknown">
      <div className="unknown__wrapper">
        <h1 className="unknown__title">404</h1>
        <h2 className="unknown__subtitle">Страница не найдена</h2>
      </div>
      <button className="unknown__back" onClick={handleBackClick} type="button">Назад</button>
    </section>
  );
}

export default NotFound;