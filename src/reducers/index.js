
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { combineReducers } from "redux";

import welcomeMessage from "./welcomeMessage";
import map from "./map";
import api from "./api";


export default combineReducers({
    welcomeMessage,
    map,
    api,
});

