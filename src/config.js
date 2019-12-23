
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


export const SITENAME = "APMS";

export type Pages = {
    [string]: {
        url: string
    }
};

export const pages: Pages = {
    home: {
        url: "/",
    },
    cities: {
        url: "#",
    },
};

export type PageName = $Keys<typeof pages>;
