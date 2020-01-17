
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { connect } from "react-redux";

import AreaSummary from "../components/AreaSummary";


const mapStateToProps = ({ api }) => ({
    summary: api.lastAQISummary,
});


export default connect(mapStateToProps)(AreaSummary);

