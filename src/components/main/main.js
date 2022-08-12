import React, { Component } from "react";
import Personal from "./personal/personal.js";
import Employment from "./employment/employment.js";



class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <main role="main">
                <Personal></Personal>
                <Employment></Employment>
                <div className="education"></div>
            </main>
        );
    }
}

export default Main;

