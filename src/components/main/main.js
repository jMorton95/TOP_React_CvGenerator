import React, { Component } from "react";
import Personal from "./personal/personal.js";



class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <main role="main">
                <Personal></Personal>
                <div className="work"></div>
                <div className="education"></div>
            </main>
        );
    }
}

export default Main;

