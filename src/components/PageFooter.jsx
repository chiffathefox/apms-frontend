
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import React from "react";

import FooterCol from "./FooterCol";


function PageFooter() {
    const cols = [
        [
            "main",
            [
                ["Home", "/"],
            ],
        ],
        [
            "language",
            [
                ["English", "#"],
            ],
        ],
    ].map(col => (
        <FooterCol
            items={col[1]}
            key={col[0]}
            title={col[0]}
        />
    ));

    return (
        <div className="footer row">
            {cols}
        </div>
    );
}


export default React.memo<any>(PageFooter);
