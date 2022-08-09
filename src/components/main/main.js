import React, { Component } from "react"

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { domClass, type, placeholder, value } = this.props;
        return (
            <main role="main">
                <div className="personal">
                    <input className={domClass}></input>
                </div>
                <div className="work"></div>
                <div className="education"></div>
            </main>
        );
    }
}

export default Main;

