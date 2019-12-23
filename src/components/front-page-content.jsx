
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";

import WelcomeMessage from "Containers/welcome-message";


export default class FrontPageContent extends React.PureComponent<any> {
    render() {
        return (
            <WelcomeMessage />
        );
    }
}
