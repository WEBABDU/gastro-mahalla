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

const App = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const initialized = useSelector((state) => state.app.initialized);
  const dispatch = useDispatch();
  const pathName = location.pathname;
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
            className={pathName === "/" ? "navbarWrapper" : "navbarWrapper2"}
          >
            <NavbarApp links={links} />
          </div>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="page"
              timeout={300}
              unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route exact path="/organization" component={Organization} />
                <Route
                  exact
                  path="/organization/:userId?/:userName?"
                  component={OrganizationDetails}
                />
              
                <Route path="/connection" component={Connection} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/settings" component={Settings} />
                <Route path="/bookings" component={Bookings} />
                <Route
                  path="/organization/:userId?/products/:productId?"
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
