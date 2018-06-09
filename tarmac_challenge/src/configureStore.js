import storeReducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    storeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      thunkMiddleware // nos permite dispatchear funciones
    )
  );

  return store;
};

export default configureStore;
