
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


function FrontPageContent() {
    return <WelcomeMessage />;
}


export default React.memo<any>(FrontPageContent);

