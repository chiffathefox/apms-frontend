
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { compose } from "redux";
import type { LeafletLatLng, LeafletLatLngBounds } from "leaflet";

import api from "../api";
import type { AQIPoint, AQISummary, AQIResponse } from "../api";


export const CLOSE_WELCOME_MESSAGE = "CLOSE_WELCOME_MESSAGE";
export const UPDATE_MAP_BOUNDS = "UPDATE_MAP_BOUNDS";
export const UPDATE_MAP_LOC = "UPDATE_MAP_LOC";
export const UPDATE_MAP_ZOOM = "UPDATE_MAP_ZOOM";
export const FETCH_AQI = "FETCH_AQI";
export const RECEIVE_AQI = "RECEIVE_AQI";
export const SHOW_ERROR = "SHOW_ERROR";


export type Action = {
    type: string,
};


export type Dispatch = (Action | (Dispatch) => void) => void;


export const closeWelcomeMessage = () => ({ type: CLOSE_WELCOME_MESSAGE });


export const showError = (e: Error) => {
    console.error("howError", e);

    return {
        type: SHOW_ERROR,
        message: e.message,
    };
};


export type ShowError = Action & {
    message: string
};


export const receiveAQI = (json: AQIResponse, bounds: LeafletLatLngBounds) => ({
    type: RECEIVE_AQI,
    dataPoints: json.dataPoints,
    summary: json.summary,
    northEast: bounds.getNorthEast(),
    southWest: bounds.getSouthWest(),
});


export type ReceiveAQI = Action & {
    dataPoints: Array<AQIPoint>,
    summary: AQISummary,
    northEast: LeafletLatLng,
    southWest: LeafletLatLng,
};


export const fetchAQI = (bounds: LeafletLatLngBounds) =>
    (dispatch: Dispatch) => {
        dispatch({ type: FETCH_AQI });
        api.getAqi(bounds).then(json => dispatch(receiveAQI(json, bounds))).
            catch(compose(dispatch, showError));
    };


export type FetchAQI = Action;


export const updateMapBounds = (bounds: LeafletLatLngBounds) => 
    (dispatch: Dispatch) => {
        dispatch({
            type: UPDATE_MAP_BOUNDS,
            northEast: bounds.getNorthEast(),
            southWest: bounds.getSouthWest(),
        });

        dispatch(fetchAQI(bounds));
    };


export type UpdateMapBounds = Action & {
    northEast: LeafletLatLng,
    southWest: LeafletLatLng,
};


export const updateMapLoc = (loc: LeafletLatLng) => ({
    type: UPDATE_MAP_LOC,
    loc 
});


export type UpdateMapLoc = Action & {
    loc: LeafletLatLng,
};


export const updateMapZoom = 
    (zoom: number) => ({ type: UPDATE_MAP_ZOOM, zoom });


export type UpdateMapZoom = Action & {
    zoom: number,
};

