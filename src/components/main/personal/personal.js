import React, { Component } from "react";
import NewInput from "../../functions";

class Personal extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {

        const firstName = ['firstName','text','First Name', ''];
        const lastName = ['lastName','text','Last Name', ''];
        
        return (

            <div className="personal">
                {NewInput(firstName)}
                {NewInput(lastName)}
               

            </div>
        );
    };
}

export default Personal;