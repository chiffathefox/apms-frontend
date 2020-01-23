
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { latLng, latLngBounds } from "leaflet";
import type { LeafletLatLng } from "leaflet";

import { UPDATE_MAP_BOUNDS, UPDATE_MAP_LOC, UPDATE_MAP_ZOOM } from "../actions";

import type { 
    UpdateMapBounds,
    UpdateMapLoc,
    UpdateMapZoom
} from "../actions";

import { createSimpleReducer, composeReducers } from "./utils";


type BoundsState = {
    +northEast: LeafletLatLng,
    +southWest: LeafletLatLng,
};

type LocState = {
    +loc: LeafletLatLng,
};

type ZoomState = {
    +zoom: number,
};


const mapBoundsDefaultState = {
    northEast: latLng(51.101, 4.550),
    southWest: latLng(51.036, 4.447),
};

const mapBounds = createSimpleReducer<BoundsState, UpdateMapBounds>(
    mapBoundsDefaultState, UPDATE_MAP_BOUNDS);


const mapLoc = createSimpleReducer<LocState, UpdateMapLoc>({
    loc: latLngBounds(mapBoundsDefaultState.northEast,
        mapBoundsDefaultState.southWest).getCenter(),
}, UPDATE_MAP_LOC);


const mapZoom = createSimpleReducer<ZoomState, UpdateMapZoom>({ zoom: 14 },
    UPDATE_MAP_ZOOM);


export default composeReducers(mapBounds, mapLoc, mapZoom);
