import React from "react";

const FilterCheckbox = ({handleCheckboxChange}) => {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" className="filter__checkbox" onChange={handleCheckboxChange}/>
        <span className="filter__slider"></span>
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;