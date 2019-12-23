
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";

import "Scss/common.scss";

export type Props = {
    +title: string,
    +items: [string, string],
};

function FooterCol(props: Props) {
    const els = props.items.map(item => (
        <li 
            className="nav-item"
            key={item[0]}
        >
            <a
                className="nav-link"
                href={item[1]}
            >
                {item[0]}
            </a>
        </li>
    ));

    return (
        <ul className="col nav flex-column">
            <li className="nav-item nav-header">
                {props.title}
            </li>

            {els}
        </ul>
    );
}


export default React.memo<any>(FooterCol);
