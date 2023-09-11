import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <div className="search">
      <div className="search__form-wrapper">
        <form className="search__form">
          <span className="search__icon">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7927 18.2638C17.3608 19.6957 15.0391 19.6957 13.6072 18.2638C12.1753 16.8319 12.1753 14.5103 13.6072 13.0783C15.0391 11.6464 17.3608 11.6464 18.7927 13.0783C20.2246 14.5103 20.2246 16.8319 18.7927 18.2638ZM19.2331 19.6468C17.2728 21.1462 14.4572 20.9994 12.6644 19.2066C10.7118 17.254 10.7118 14.0882 12.6644 12.1355C14.617 10.1829 17.7829 10.1829 19.7355 12.1355C21.5282 13.9283 21.675 16.7437 20.1758 18.7039L23.7425 22.2706L22.7997 23.2134L19.2331 19.6468Z" fill="#959595"/>
            </svg>
          </span>
          <input className="search__input" type="search" placeholder="Фильм" required></input>
          <button className="search__button" type="submit">
            Найти
          </button>
        </form>
      </div>
      <span className="search__line"></span>
      <FilterCheckbox/>
    </div>
  );
}

export default SearchForm;