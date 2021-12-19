import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createBrowserHistory from "./history";
import { Provider } from "react-redux";
import store from "./redux/store";
import { syncHistoryWithStore } from "react-router-redux";
import Preloader from "./components/Preloader/Preloader";
import { I18nextProvider } from "react-i18next";
import i18next from "./18n";
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from "react-router-dom";

const history = syncHistoryWithStore(createBrowserHistory, store);
export const changeLanguage = lng => {
  i18next.changeLanguage(lng);
};


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <Suspense fallback={Preloader}>
            {/* <App /> */}
            <Switch>
              <Route path="/:locale" component={App} />
              <Redirect to="/en" />
            </Switch>
          </Suspense>
        </Provider>
      </I18nextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
