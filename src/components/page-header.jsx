
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { SITENAME, type PageName, pages } from "Config";
import { tr } from "Lang";


export type Props = {
    +selected: PageName
};


function PageHeader(props: Props) {
    const navPages = Object.keys(pages).map((key) => (
        <Nav.Link
            eventKey={key}
            href={pages[key].url}
            key={key}
        >
            {tr(key, "page")}
        </Nav.Link>
    ));

    return (
        <Navbar
            bg="light"
            expand="lg"
        >
            <Navbar.Brand href="/">
                <img
                    alt={SITENAME}
                    src="img/logo.png"
                    title={SITENAME}
                />

                {SITENAME}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="header-navbar-nav" />

            <Navbar.Collapse id="header-navbar-nav">
                <Nav activeKey={props.selected}>
                    {navPages}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default React.memo<Props>(PageHeader);
