import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Preloader from "./components/Preloader/Preloader";
import { I18nextProvider } from "react-i18next";
import i18next from "./18n"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <Suspense fallback={Preloader}>
            <App />
          </Suspense>
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
