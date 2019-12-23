
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";

import PageHeader from "Components/page-header";
import PageFooter from "Components/page-footer";
import FrontPageContent from "Components/front-page-content";
import "bootstrap";
import "Scss/common.scss";


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
