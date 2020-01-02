
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import rootReducer from "./reducers";
import { STORAGE_UPDATE_MS } from "./config";


const STATE_KEY = "STATE";
let timeoutId = null;


function scheduleSaveState(getState) {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }

    setTimeout(() => {
        console.log(Date.now(), "updating persistent state ...");
        localStorage.setItem(STATE_KEY, JSON.stringify(getState()));
        timeoutId = null;
    }, STORAGE_UPDATE_MS);
}


function saveState({ getState }) {
    return next => action => {
        const ret = next(action);

        console.log(Date.now(), "middleware call", action);
        scheduleSaveState(getState);

        return ret;
    };
}


let preloadedState = {};

try {
    preloadedState = JSON.parse(localStorage.getItem(STATE_KEY) || "{}");

    if (typeof preloadedState !== "object" || preloadedState === null) {
        preloadedState = {};
    }
} catch (e) {
    console.error("Invalid app state in local storage:", e);
}

const store = createStore(rootReducer, preloadedState,
    applyMiddleware(saveState));

const rootEl = document.getElementById("root");

if (rootEl !== null) {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootEl
    );
} else {
    /* TODO: report a fatal error. */
}

