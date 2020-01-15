
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import type { LeafletLatLng, LeafletLatLngBounds } from "leaflet";


export type AQIPoint = {
    loc: LeafletLatLng,
    aqi: number,
    pressure: number,
    temp: number,
    radius: number,
    id: string,
};


export type AQISummary = {
    aqi: number,
    pressure: number,
    temp: number,
};


export type AQIResponse = {
    dataPoints: Array<AQIPoint>,
    summary: AQISummary,
};


export class API {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }


    request(relativePath: string, queryParams: any) {

        /* TODO: add exponential back-off. */

        const url = new URL(this.endpoint + relativePath);

        url.search = new URLSearchParams(queryParams).toString();

        return fetch(url).then(response => {
            let p = response.json();

            if (!response.ok) {
                p = p.then(json => Promise.reject(new Error(json.message)));
            }

            return p;
        });
    }


    getAqi = (bounds: LeafletLatLngBounds) => this.request("get-aqi", {
        northEastLat: bounds.getNorthEast().lat,
        northEastLng: bounds.getNorthEast().lng,
        southWestLat: bounds.getSouthWest().lat,
        southWestLng: bounds.getSouthWest().lng,
    });
}


const endpoint = "https://sq95w50q1d.execute-api.eu-west-1.amazonaws.com/main/";
const api = new API(endpoint);


export default api;

