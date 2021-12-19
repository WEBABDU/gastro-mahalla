import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer/Footer";
import NavbarApp from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Organization from "./Pages/Organization/Organization";
import OrganizationDetails from "./Pages/Organization/OrganizationDetails/OrganizationDetails";
import Connection from "./Pages/Connection/Connection";
import SignIn from "./components/Login/SignIn/SignIn";
import SignUp from "./components/Login/SingnUp/SingnUp";
import Settings from "./components/Settings/Settings";
import Bookings from "./components/Bookings/Bookings";
import Products from "./components/Products/Products";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { useTranslation } from "react-i18next";
import i18next from "./18n"
import { changeLanguage } from ".";



const App = ({match}) => {
  const { t } = useTranslation();
  const uLocation = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const initialized = useSelector((state) => state.app.initialized);
  const location = useSelector(state => state.routing.location)
  const dispatch = useDispatch();
  const pathName = uLocation.pathname;
  const lang = i18next.language;
  console.log("lang", lang);
  console.log("match", match);
  console.log("location", location);

  if (lang !== match.params.locale) {
    changeLanguage(match.params.locale);
  }

  const links = [
    { id: 1, linkText: t("about_project"), path: "about" },
    { id: 2, linkText: t("news"), path: "news" },
    { id: 3, linkText: t("organization"), path: "organization" },
    { id: 4, linkText: t("contact"), path: "connection" },
  ];

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(initializeApp());
      setIsLoading(initialized);
      console.log('token');
    } else {
      setTimeout(() => {
        setIsLoading(true);
        console.log('set');
      }, 2000);
    }
  }, [dispatch, initialized]);
  
  return (
    <>
      {!isLoading ? (
        <Preloader />
      ) : (
        <>
          <div
            className={pathName === `${match.url}` ? "navbarWrapper" : "navbarWrapper2"}
          >
            <NavbarApp links={links} match={match}/>
          </div>
          <TransitionGroup>
            <CSSTransition
              key={uLocation.key}
              classNames="page"
              timeout={300}
              unmountOnExit
            >
              <Switch location={uLocation}>
                <Route exact path={`${match.url}`} component={Home} />
                <Route path={`${match.url}/about`} component={About} />
                <Route path={`${match.url}/news`} component={News} />
                <Route exact path={`${match.url}/organization`} component={Organization} />
                <Route
                  exact
                  path={`${match.url}/organization/:userId/:userName`}
                  component={OrganizationDetails}
                />
              
                <Route path={`${match.url}/connection`} component={Connection} />
                <Route path={`${match.url}/signIn`} component={SignIn} />
                <Route path={`${match.url}/signUp`} component={SignUp} />
                <Route path={`${match.url}/settings`} component={Settings} />
                <Route path={`${match.url}/bookings`} component={Bookings} />
                <Route
                  path={`${match.url}/organization/:userId?/products/:productId?`}
                  component={Products}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
