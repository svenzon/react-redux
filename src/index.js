import "babel-polyfill";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import Routes from "./routes";
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import App from "./components/App";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);