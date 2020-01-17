
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import { compose } from "redux";
import IntervalTree from "node-interval-tree";


const caqiColorTree = new IntervalTree();
const caqiTextTree = new IntervalTree();
const aqiIntervals = [
    [   0,  25, [ 109,  44,  74 ], [  69,  63,  81 ], "Very low" ],
    [  26,  50, [  69,  63,  81 ], [  48,  95,  93 ], "Low" ],
    [  51,  75, [  48,  95,  93 ], [  36,  98,  95 ], "Medium" ],
    [  75, 100, [  36,  98,  95 ], [ 350, 100,  59 ], "High" ],
    [ 100, +Infinity, [ 350, 100,  59 ], [ 350, 100,  59 ], "Very high" ],
];


aqiIntervals.forEach(interval => {
    const [ low, high, lowRemap, highRemap, text ] = interval;

    caqiColorTree.insert(low, high, value => lowRemap.map((lr, i) => 
        (highRemap[i] - lr) * (value - low) / (high - low) + lr));

    caqiTextTree.insert(low, high, text);
});


function hsl(color) {
    const [ h, s, l ] = color;

    return `hsl(${h}, ${s}%, ${l}%)`;
}


export function caqiHsl(aqi: number) {
    return caqiColorTree.search(aqi, aqi)[0](aqi);
}


export const caqiHslStr = compose(hsl, caqiHsl);


export function linearGradient() {
    const start = aqiIntervals[0][0];
    const end = aqiIntervals[aqiIntervals.length - 1][0];
    const delta = end - start;
    const points = [];

    aqiIntervals.forEach(interval => {
        const perc = Math.ceil(100 - (interval[0] - start) * 100 / delta);

        points.push(`${hsl(interval[2])} ${perc}%`);
    });

    return {
        start,
        end,
        css: `linear-gradient(${points.reverse().join(", ")})`,
    };
}


export function caqiText(aqi: number) {
    return caqiTextTree.search(aqi, aqi)[0];
}

