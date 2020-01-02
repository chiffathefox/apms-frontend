
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { connect } from "react-redux";

import WelcomeJumbotron from "../components/WelcomeJumbotron";
import { closeWelcomeMessage } from "../actions";


const mapStateToProps = (state) => ({
    visible: !state.welcomeMessage.isClosed
});

const mapDispatchToProps = (dispatch) => ({
    onCloseClick: () => dispatch(closeWelcomeMessage())
});


export default connect(mapStateToProps, mapDispatchToProps)(WelcomeJumbotron);

