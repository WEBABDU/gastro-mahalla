import React, { useState } from "react";
import style from "./Dropdown.module.css";
import proImg from "./../../cammon/person.png";
import arrow from "./../../cammon/dropdownArrow.png";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth-reducer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Dropdown = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const first_name = useSelector((state) => state.auth.first_name);
  const last_name = useSelector((state) => state.auth.last_name);
  const cheef = useSelector((state) => state.auth.cheef);
  const image = useSelector((state) => state.auth.image);

  return (
    <div className={style.drodownWrapper}>
      <div className={style.myDropdown} onClick={() => setIsActive(!isActive)}>
        <div className={style.proImg}>
          <img src={image.thumb ? image.thumb : proImg} alt="person" />
        </div>
        <div className={style.proInfo}>
          <h5 className={style.proName}>{first_name + " " + last_name}</h5>
          <p className={style.proStatus}>{cheef ? t("who") : t("status")}</p>
        </div>
        <img
          src={arrow}
          alt="arrow"
          className={
            isActive ? `${style.arrow} ${style.active}` : `${style.arrow}`
          }
        />
      </div>
      <div
        className={
          isActive
            ? `${style.myDropdownMenu} ${style.active}`
            : `${style.myDropdownMenu}`
        }
      >
        <div className={style.dmContent}>
          <Link to="/bookings" onClick={() => setIsActive(false)}>
            {t("order")}
          </Link>
          <Link to="/settings" onClick={() => setIsActive(false)}>
            {t("settings")}
          </Link>
          <Link onClick={() => logout()} to="/">
            {t("exit")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
