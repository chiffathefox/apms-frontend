
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 *
 * @flow
 */


"use strict";


import * as React from "react";


export type ClickHandler = (key?: React.Key) => void;

export type Type = "" | "large";

export type Props = {
    +children: React.Node,
    +onClick?: ClickHandler,
    +selected: boolean,
    +primary: boolean,
    +type: Type,
    +xkey?: React.Key
};


export default class Button extends React.PureComponent<Props> {
    static defaultProps = {
        primary: true,
        selected: false,
        type: "",
    };


    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.xkey);
        }
    }


    render() {
        const { children, type, selected, primary } = this.props;
        let classes = "btn";

        if (type === "large") {
            classes += " btn-lg";
        }

        if (selected) {
            classes += " selected";
        }

        if (primary) {
            classes += " btn-primary";
        }

        return (
            <button 
                className={classes}
                onClick={this.handleClick}
                type="button"
            >
                {children}
            </button>
        );
    }
}

