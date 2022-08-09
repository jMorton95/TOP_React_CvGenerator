import React, { Component } from "react";
import NewInput from "../../functions";

class Personal extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {

        const attributes = {
            firstName: ['firstName','text','First Name', ''],
            lastName: ['lastName','text','Last Name', ''],
            address: ['address', 'text', 'Address', '']
        }
        
        const inputList = Object.keys(attributes).map(item => (
            NewInput(attributes[item])
        ));

        return (

            <div className="personal">
                {inputList}
            </div>
        );
    };
}

export default Personal;