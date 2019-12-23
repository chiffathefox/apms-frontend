
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";

import FooterCol from "Components/footer-col";
import "Scss/common.scss";


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
