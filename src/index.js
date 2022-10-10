import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import reducer from "./reducers";
import middlewares from "./middlewares";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

const store = createStore(reducer, middlewares);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
