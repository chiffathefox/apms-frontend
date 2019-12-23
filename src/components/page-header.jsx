
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";

import { SITENAME, type PageName, pages } from "Config";
import { tr } from "Lang";
import "Scss/page-header.scss";


export type Props = {
    +selected: PageName
};

function PageHeader(props: Props) {
    const navPages = Object.keys(pages).map((key) => {
        let className = "nav-item nav-link";

        if (key === props.selected) {
            className += " active";
        }

        return (
            <a 
                className={className}
                href={pages[key].url}
                key={key}
            >
                {tr(key, "page")}
                <span className="sr-only">
                    {"(current)"}
                </span>
            </a>
        );
    });

    return (
        <div className="navbar navbar-expand-lg navbar-light">
            <a 
                className="navbar-brand" 
                href="/"
            >
                <img
                    alt={SITENAME}
                    src="img/logo.png"
                    title={SITENAME}
                />

                {SITENAME}
            </a>

            <button 
                aria-controls="navbar-markup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-markup"
                data-toggle="collapse"
                type="button"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbar-markup"
            >
                <div className="navbar-nav">
                    {navPages}
                </div>
            </div>
        </div>
    );
}


export default React.memo<Props>(PageHeader);
