import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";
import profile from "./../../cammon/profile.png";
import navBrand from "./../../cammon/navBrand.svg";
import profile2 from "./../../cammon/prof.svg";
import { useState } from "react";
import LangDropdown from "../../utilities/LangDropdown/LangDropdown";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../../redux/sidebar-reducer";
import Dropdown from "../../utilities/Dropdown/Dropdown";
import { useTranslation } from "react-i18next";

const NavbarApp = (props) => {
  const location = useLocation()
  const pathName = location.pathname;
  const isActive = useSelector((state) => state.sidebar.isActive);
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false);
  const { t } = useTranslation();
  // const [selected, setSelected] = useState("uz");

  

  return (
    <>
      <Container className={style.customContainer}>
        <div
          className={
            pathName === "/" ? style.nav : style.nav + " " + style.nav2
          }
        >
          <div className={style.leftNav}>
            <Link to="/">
              <img
                src={navBrand}
                className={style.navBrandImg}
                alt="nav-brand"
              />
            </Link>

            <Link
              to="/"
              className={style.leftNavItem}
              onClick={() => setMenuActive(false)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t("home_page")}</span>
            </Link>
            <div
              className={style.profile}
              onClick={() => dispatch(setIsActive(!isActive))}
            >
              <img src={profile2} alt="profile2" />
            </div>
          </div>

          <div
            className={
              menuActive
                ? style.linksBlock + " " + style.active
                : style.linksBlock
            }
          >
            {props.links.map((e) => (
              <Link
                key={e.id}
                onClick={() => setMenuActive(false)}
                className={style.link}
                to={`/${e.path}`}
              >
                {e.linkText}
              </Link>
            ))}

            {localStorage.token ? (
              <Dropdown />
            ) : (
              <Link
                onClick={() => setMenuActive(false)}
                className={style.login}
                to="/signIn"
              >
                <span>
                  <img src={profile} alt="profile" />
                </span>
                <p className={style.loginText}>{t('sign_in')}</p>
              </Link>
            )}
          </div>
          <button
            className={
              menuActive
                ? ` ${style.hamburger}  ${style.isActive} `
                : style.hamburger
            }
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className={style.hamburgerBox}>
              <span className={style.hamburgerInner} />
            </span>
          </button>
          <LangDropdown/>
        </div>
      </Container>
    </>
  );
};

export default NavbarApp;
