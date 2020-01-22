
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React, { useCallback, useState, useMemo, useRef, useEffect } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import type { LeafletLatLng, LeafletLatLngBounds } from "leaflet";
import type { Map as MapType } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

import { caqiHslStr, linearGradient } from "../aqi-tools";
import { AQI_UPDATE_MS } from "../config";


export type DataPoint = {
    +lat: number,
    +lng: number,
    +aqi: number,
    +pressure: number,
    +temp: number,
    +radius: number,
};

export type Props = {
    +initialLoc: [number, number],
    +initialZoom: number,
    +dataPoints: DataPoint[],
    +onBoundsChange: (bounds: LeafletLatLngBounds) => void,
    +onLocChange: (loc: LeafletLatLng) => void,
    +onZoomChange: (zoom: number) => void,
    +onDataTimeout: (bounds: LeafletLatLngBounds) => void,
    +maxZoom?: number,
};


const PollutionMap = (props: Props) => {
    const { 
        onBoundsChange,
        onZoomChange,
        onLocChange,
        onDataTimeout,
    } = props;

    const handleMoveEnd = useCallback(
        e => {
            const { target } = e;

            onBoundsChange(target.getBounds());
            onLocChange(target.getCenter());
        }, [ onBoundsChange, onLocChange ]);

    const handleZoomEnd = useCallback(
        e => onZoomChange(e.target.getZoom()), [ onZoomChange ]);

    const gradient = useMemo(() => linearGradient(), []);

    const mapRef = useRef<null | MapType>(null);

    useEffect(() => {
        if (mapRef.current !== null) {
            const map = mapRef.current.leafletElement;

            onBoundsChange(map.getBounds());
            onLocChange(map.getCenter());
        }
    }, [ onBoundsChange, onLocChange ]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (mapRef.current !== null) {
                onDataTimeout(mapRef.current.leafletElement.getBounds());
            }
        }, AQI_UPDATE_MS);

        return () => clearInterval(interval);
    }, [ onDataTimeout ]);

    const circles = props.dataPoints.map(
        ({ lat, lng, aqi, radius }) => (
            <Circle
                center={[ lat, lng ]}
                fillColor={caqiHslStr(aqi)}
                fillOpacity={0.7}
                key={`${lat}${lng}`}
                radius={radius}
                stroke={false}
            />
        ));

    const [ initialLoc ] = useState(props.initialLoc);
    const [ initialZoom ] = useState(props.initialZoom);
    const style = { backgroundImage: gradient.css };

    return (
        <>
            <Map
                center={initialLoc}
                className="col-md-auto"
                maxZoom={props.maxZoom}
                onMoveEnd={handleMoveEnd}
                onZoomEnd={handleZoomEnd}
                ref={mapRef}
                zoom={initialZoom}
            >
                <TileLayer
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />

                {circles}
            </Map>

            <div 
                className="col-md-auto aqi-gradient"
                style={style}
            />

            <div className="col-md-auto aqi-gradient-legend">
                <p>
                    {gradient.end}
                    <br />
                    {gradient.endText}
                </p>
                <p>
                    {gradient.startText}
                    <br />
                    {gradient.start}
                </p>
            </div>
        </>
    );
};

PollutionMap.defaultProps = {
    maxZoom: 19,
};


export default React.memo<any>(PollutionMap);

