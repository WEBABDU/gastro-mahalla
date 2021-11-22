import React from "react";
import style from "./LangDropdown.module.css";
import arrow from "./../../cammon/arrowLang.svg";
import { useState } from "react";
import i18next from "i18next";

const LangDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const lang = localStorage.getItem('i18nextLng')
  const options = ["en", "ru", "uz"].filter((e) => e !== lang);

  const changeLanguage = (e) => {
    // setSelected(e.target.textContent)
    i18next.changeLanguage(e.target.textContent)
  }
  return (
    <div className={style.dropdown} onClick={() => setIsActive(!isActive)}>
      <span className={style.dropActive}>
        <span>{lang}</span>
        <img
          src={arrow}
          alt="arrow"
          className={isActive ? style.active : null}
        />
      </span>
      <div
        className={
          isActive
            ? `${style.dropdownContent} ${style.active}`
            : `${style.dropdownContent}`
        }
      >
        {options.map((el) => (
          <span
            key={el}
            onClick={changeLanguage}
            className={style.item}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LangDropdown;
