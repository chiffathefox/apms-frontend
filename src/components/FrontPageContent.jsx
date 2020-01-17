
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";

import WelcomeMessage from "../containers/WelcomeMessage";
import MainPollutionMap from "../containers/MainPollutionMap";
import MainAreaSummary from "../containers/MainAreaSummary";


function FrontPageContent() {
    return (
        <>
            <WelcomeMessage />

            <div className="row">
                <MainPollutionMap />
                <MainAreaSummary />
            </div>
        </>
    );
}


export default React.memo<any>(FrontPageContent);

