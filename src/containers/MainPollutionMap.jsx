
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { compose } from "redux";
import { connect } from "react-redux";

import PollutionMap from "../components/PollutionMap";

import {
    updateMapBounds,
    updateMapLoc,
    updateMapZoom
} from "../actions";


const mapStateToProps = ({ map, api }) => ({
    initialLoc: map.loc,
    initialZoom: map.zoom,
    dataPoints: api.aqiDataPoints,
});

const mapDispatchToProps = (dispatch) => ({
    onBoundsChange: compose(dispatch, updateMapBounds),
    onLocChange: compose(dispatch, updateMapLoc),
    onZoomChange: compose(dispatch, updateMapZoom),
});


export default connect(mapStateToProps, mapDispatchToProps)(PollutionMap);

