import React from "react";
import style from "./LangDropdown.module.css";
import arrow from "./../../cammon/arrowLang.svg";
import { useState } from "react";
import i18next from "i18next";
import { genarateLanguge } from "../../genarateLanguge";
import { Link, useLocation } from "react-router-dom";

const LangDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const lang = localStorage.getItem("i18nextLng");
  const options = ["en", "ru", "uz"].filter((e) => e !== lang);
  const location = useLocation()
  const changeLanguage = (e) => {
    // setSelected(e.target.textContent)
    i18next.changeLanguage(e.target.textContent);
  };
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
          <Link to={genarateLanguge(el, location)}>
            <span key={el} onClick={changeLanguage} className={style.item}>
              {el}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LangDropdown;
