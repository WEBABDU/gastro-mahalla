import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { signUpReducer } from "./signUp-reducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";
import { sidebarReducer } from "./sidebar-reducer";
import { regionsReducer } from "./regions-reducer";
import { reducer as formReducer } from "redux-form";
import { productsReducer } from "./products-reducer";
import { appReducer } from "./app-reducer";
import { bookingReducer } from "./booking-reducer";


const reducers = combineReducers({
  signUp: signUpReducer,
  auth: authReducer,
  app: appReducer,
  sidebar: sidebarReducer,
  regions: regionsReducer,
  products: productsReducer,
  booking: bookingReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
