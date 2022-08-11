import React, { Component } from "react";
import {NewInput, NewButton} from "../../functions";

class Personal extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {

        const attributes = {
            firstName: ['firstName','text','First Name'],
            lastName: ['lastName','text','Last Name'],
            title: ['title','text','Title'],
            phoneNumber: ['phoneNumber','number','Phone Number'],
            email: ['email','email','Email Address'],
            address: ['address', 'text', 'Address']
            
        }
        const inputList = Object.keys(attributes).map(item => (
            NewInput(attributes[item])
        ));

        function submitEvent(e) {
            e.preventDefault();
        }

        const SubmitButton = NewButton(['submitButton', 'submit', 'Submit']);

        
        return (

            <div className="personal">
                <h3 className="personalHeading">Personal Information</h3>
                <form className="inputList">
                    {inputList}
                    {SubmitButton}
                    {NewButton(['submitButton', 'submit', 'Submit'])}
                </form>
                
            </div>
        );
    };
}

export default Personal;