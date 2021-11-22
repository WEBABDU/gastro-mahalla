import React from "react";
import style from "./Preloader.module.css";
import spinner from "./../../cammon/preloader_spinner.svg";
import logo from "./../../cammon/preloader_logo.svg";

const Preloader = () => {
  return (
    <div className={style.wrapper}>
      <img src={logo} alt="gastroLogo" />
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Preloader;
