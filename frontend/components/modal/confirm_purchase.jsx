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
        
        if (!this.props.user){
            return (
                <form className="confirm">
                    <div className="confirm-container">
                        <h1 className="confirm-text">Confirm Registration</h1>
                        <label className="confirm-first-container">
                            <input
                            className="confirm-first"
                            type="text"
                            onChange={this.update('firstName')}
                            placeholder="First name"/>
                        </label>
                        <label className="confirm-last-container">
                            <input
                            className="confirm-last"
                            type="text"
                            onChange={this.update('lastName')}
                            placeholder="Last name"/>
                        </label>
                        <label className="confirm-email-container">
                            <input
                            className="confirm-email"
                            type="text"
                            onChange={this.update('email')}
                            placeholder="Email"/>
                        </label>
                        <button onClick={() => this.props.openModal("thanks")} className="confirm-btn">Confirm</button>
                    </div>
                </form>
            )
        } else {
            return (
                <form className="confirm">
                    <p className="confirm-text">Please confirm your registration {this.props.user.first_name}</p>
                    <div className="confirm-btn-container">
                        <button onClick={() => this.props.openModal("thanks")} className="confirm-btn">Confirm</button>
                    </div>
                </form>
            )
        }
    }
}

export default ConfirmPurchase;