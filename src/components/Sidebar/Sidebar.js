import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import brokenDoc from "./../../cammon/brokenDoc.png";
import settings from "./../../cammon/Setting.png";
import logoutimg from "./../../cammon/Logout.png";
import person from "./../../cammon/person.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../../redux/sidebar-reducer";
import { logout } from "../../redux/auth-reducer";
import { useTranslation } from "react-i18next";


const Sidebar = () => {
  const {t} = useTranslation()
  const isActive = useSelector((state) => state.sidebar.isActive);
  const first_name = useSelector((state) => state.auth.first_name);
  const last_name = useSelector((state) => state.auth.last_name);
  const image = useSelector((state) => state.auth.image);
  const status = useSelector((state) => state.auth.cheef);
  const dispatch = useDispatch();
  return (
    <div
      className={
        isActive ? `${style.sidebar} ${style.active}` : `${style.sidebar}`
      }
    >
      <div className={style.manageCarad}>
        <div className={style.prof}>
          <img
            src={image.thumb ? image.thumb : person}
            alt="person"
            className={style.person}
          />
          <span className={style.profName}>{first_name + " " + last_name}</span>
          <span className={style.profSub}>
            {status ? t("who") : t("status")}
          </span>
        </div>
        <div className={style.profLinks}>
          <NavLink
            to="/bookings"
            activeClassName={style.active}
            onClick={() => dispatch(setIsActive(false))}
          >
            <img src={brokenDoc} alt="brokenDoc" />
            <span className={style.linkText}>{t("my_orders")}</span>
          </NavLink>
          <NavLink
            to="/settings"
            activeClassName={style.active}
            onClick={() => dispatch(setIsActive(false))}
          >
            <img src={settings} alt="settings" />
            <span className={style.linkText}>{t("profile_settings")}</span>
          </NavLink>
          <Link
            onClick={() => dispatch(logout())}
            to="/"
            className={style.forExit}
          >
            <img src={logoutimg} alt="logoutimg" />
            <span className={style.linkText}>{t("exit")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
