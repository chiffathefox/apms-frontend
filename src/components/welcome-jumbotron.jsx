
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";
import Button from "react-bootstrap/Button";


export type Props = {
    +onCloseClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
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
            <Button
                onClick={props.onCloseClick}
                size="lg"
            >
                {"Got it!"}
            </Button>
        </div>
    );
}


export default React.memo<Props>(WelcomeJumbotron);
