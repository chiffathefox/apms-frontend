
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";

import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import FrontPageContent from "./FrontPageContent";
import "bootstrap";
import "../scss/common.scss";


export default function App() {
    return (
        <>
            <PageHeader selected="home" />
            <div className="main">
                <FrontPageContent />
            </div>
            <PageFooter />
        </>
    );
}
