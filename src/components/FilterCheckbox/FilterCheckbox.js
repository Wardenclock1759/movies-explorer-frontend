import React from "react";

const FilterCheckbox = ({handleCheckboxChange, checked = false}) => {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" className="filter__checkbox" defaultChecked={checked} checked={checked} onChange={handleCheckboxChange}/>
        <span className="filter__slider"></span>
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;