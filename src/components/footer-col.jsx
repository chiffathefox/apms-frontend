
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

import "Scss/common.scss";


export type Props = {
    +title: string,
    +items: [string, string],
};


function FooterCol(props: Props) {
    const navItems = props.items.map(item => (
        <Nav.Item key={item[0]}>
            <Nav.Link href={item[1]}>
                {item[0]}
            </Nav.Link>
        </Nav.Item>
    ));

    return (
        <Nav className="col flex-column">
            <Nav.Item>
                {props.title}
            </Nav.Item>

            {navItems}
        </Nav>
    );
}


export default React.memo<any>(FooterCol);
