
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";

import * as Button from "Components/button";


export type Props = {
    +onCloseClick?: Button.ClickHandler,
};

function WelcomeJumbotron(props: Props) {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">
                {"Realtime Air Pollution Monitoring"}
            </h1>
            <p className="lead">
                {"This site enables you to monitor air pollution levels " +
                        "in areas where our sensors were installed."}
            </p>
            <hr className="my-4" />
            <p>
                {"Our devices employ particulate matter, humidity, " +
                        "air pressure and temperature sensors to " +
                        "determine air quality level"}
            </p>
            <Button.default
                onClick={props.onCloseClick}
                primary
                type="large"
            >
                {"Got it!"}
            </Button.default>
        </div>
    );
}


export default React.memo<Props>(WelcomeJumbotron);
