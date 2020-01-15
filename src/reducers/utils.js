
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import type { Action } from "../actions";


/**
 * Create a single-action reducer.
 */

export function createSimpleReducer<T: any, A: Action = Action>(
    defaultState: T, mainActionType: string,
    _reducer?: (state: T, action: A) => T) {

    const defaultReducer = (_: T, action: A) => Object.keys(defaultState)
        .reduce((acc, key) => {
            acc[key] = action[key];

            return acc;
        }, Object.assign({}, defaultState));

    const reducer: (state: T, action: A) => T = _reducer || defaultReducer;

    return (state: T = defaultState, action: A) => {
        if (action.type === mainActionType) {
            return Object.assign({}, state, reducer(state, action));
        }

        return Object.assign({}, defaultState, state);
    };
}


export function composeReducers<T: any, A: Action = Action>(
    ...args: Array<(state: T, action: A) => T>) {

    return (state: T, action: A) => {
        const nextState = Object.assign({}, state);

        for (const arg of args) {
            Object.assign(nextState, arg(nextState, action));
        }

        return nextState;
    };
}

