
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";

import WelcomeJumbotron from "Components/welcome-jumbotron";


export type State = {
    closed: boolean
};


export default class WelcomeMessage extends React.PureComponent<any, State> {
    state = {
        closed: !!localStorage.getItem(WelcomeMessage.CLOSED_STORAGE_KEY)
    };


    static CLOSED_STORAGE_KEY = "welcomeMessageClosed";


    handleCloseClick = () => {
        const closed = true;

        this.setState({closed});
        localStorage.setItem(WelcomeMessage.CLOSED_STORAGE_KEY, closed);
    }


    render() {
        return !this.state.closed && 
            <WelcomeJumbotron onCloseClick={this.handleCloseClick} />;
    }
}
