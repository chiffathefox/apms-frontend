
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";

import { caqiHslStr, caqiText } from "../aqi-tools";
import type { AQISummary } from "../api";


export type Props = {
    +summary: AQISummary,
};


const summaryProcs = [
    [ "temp", "\u2103", Math.floor ],
    [ "pressure", "mbar", value => Math.floor(value / 100) ],
    [ "humidity", "%RH", Math.floor ],
    [ "aqi", "CAQI", value => value ],
];


const AreaSummary = (props: Props) => {
    const { summary } = props;
    const { pressure, aqi } = summary;
    const isValid = pressure > 0;
    const areaName = isValid ? summary.areaName : "No data available";
    const miscFields = summaryProcs.map(([ name, type, cnv ]) => (
        <div 
            className="col"
            key={name}
        >
            {cnv(summary[name])}

            <span>
                &nbsp;
                {type}
            </span>
        </div>
    ));

    const aqiText = (
        <div 
            className="aqi-text"
            style={{ color: caqiHslStr(aqi) }}
        >
            <span>
                {"Air pollution: "}
            </span>

            {caqiText(aqi)}
        </div>
    );

    const misc = (
        <>
            <div className="row">
                {miscFields}
            </div>
            {aqiText}
        </>
    );


    return (
        <div className="col d-flex align-items-center">
            <div className="container aqi-summary">
                <h1>
                    {areaName}
                </h1>
                {isValid ? misc : null}
            </div>
        </div>
    );
};


export default React.memo<any>(AreaSummary);

