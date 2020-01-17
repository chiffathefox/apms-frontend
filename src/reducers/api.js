
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";



import { createSimpleReducer, composeReducers } from "./utils";
import { FETCH_AQI, RECEIVE_AQI } from "../actions";
import type { ReceiveAQI, FetchAQI } from "../actions";
import type { AQIPoint, AQISummary } from "../api";


export type FetchingState = {
    +fetching: number,
};

export type ReceiveAQIState = {
    +aqiDataPoints: Array<AQIPoint>,
    +lastAQISummary: AQISummary,
};

export type APIState = FetchingState & ReceiveAQIState;


export type APIAction = ReceiveAQI | FetchAQI;


const aqiFetch = createSimpleReducer<FetchingState, FetchAQI>({
    fetching: 0,
}, FETCH_AQI, state => ({ fetching: state.fetching + 1 }));


const aqiReceive = createSimpleReducer<ReceiveAQIState, ReceiveAQI>({
    aqiDataPoints: [],
    lastAQISummary: {
        aqi: 0,
        pressure: 0,
        temp: 0,
        areaName: "Unknown",
    },
}, RECEIVE_AQI, (state, action) => {
    const { northEast, southWest } = action;
    const aqiDataPoints = state.aqiDataPoints.filter(({ lat, lng }) =>
        lat < southWest.lat || lat > northEast.lat ||
        lng < southWest.lng || lng > northEast.lng).concat(action.dataPoints);

    console.dir(action);

    return { 
        aqiDataPoints,
        lastAQISummary: action.summary,
    };
});


export default composeReducers(aqiFetch, aqiReceive);

