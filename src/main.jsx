
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

import App from "Components/app";


const rootEl = document.getElementById("root");

if (rootEl != null) {
    render(<App />, rootEl);
} else {
    /* TODO: report a fatal error. */
}
