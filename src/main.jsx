
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

import Root from "Containers/root";


const rootEl = document.getElementById("root");

if (rootEl != null) {
    render(<Root />, rootEl);
} else {
    /* TODO: report a fatal error. */
}
