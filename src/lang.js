
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { pages } from "./config";


const lang = {
    page: {},
    _dump: {}
};


for (const key in pages) {
    const str = key[0].toUpperCase() + key.substr(1);
    lang.page[key] = str;
    lang._dump[key] = str;
}


export function tr(str: string, path: string = "_dump") {
    let langMap = lang;
    const pathParts = path.split(".");

    for (let i = 0; i < pathParts.length; i++) {
        const key = pathParts[i];

        if (key in langMap) {
            langMap = langMap[key];
        } else {
            console.error(`Couldn't resolve translation for '${str}' in ` +
                `${path} (${pathParts.slice(0, i + 1).join(".")} not found)`);

            return str;
        }
    }

    if (str in langMap) {
        return langMap[str];
    }

    console.error(`Couldn't resolve translation for '${str}' in ${path}`);

    return str;
}
