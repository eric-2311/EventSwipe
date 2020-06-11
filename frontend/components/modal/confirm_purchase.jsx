import React from 'react';

class ConfirmPurchase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    componentDidMount(){
        
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    render(){
        // if (!this.props.registration){
        //     return null;
        // }

        return (
            <form className="confirm">
                <h1>Confirm Registration</h1>
                <label>
                    <input
                    type="text"
                    placeHolder="First name"/>
                </label>
                <label>
                    <input
                    type="text"
                    placeHolder="Last name"/>
                </label>
                <label>
                    <input
                    type="text"
                    placeHolder="Email"/>
                </label>
            </form>
        )
    }
}

export default ConfirmPurchase;