
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { CLOSE_WELCOME_MESSAGE } from "../actions";
import { createSimpleReducer } from "./utils";


type State = {
    isClosed: boolean,
};


const welcomeMessage = createSimpleReducer<State>(
    { isClosed: false }, CLOSE_WELCOME_MESSAGE, () => ({ isClosed: true }));


export default welcomeMessage;

