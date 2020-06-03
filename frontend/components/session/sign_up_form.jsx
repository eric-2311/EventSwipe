import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        }
    }

    update(field){
        return e => { 
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }
    
    render(){
        return (
            <div className="sign-up-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="sign-up-header">Welcome</h1>
                    <label className="sign-up-email">
                        <input
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.update('email')}/>
                    </label> 
                        <div className="sign-up-name">
                        <label>
                            <input
                            type="text"
                            placeholder="first name"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            size="9"/>
                        </label>
                        <label className="sign-up-name">
                            <input
                            type="text"
                            placeholder="last name"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            size="9"/>
                        </label>
                        </div>
                    <label className="sign-up-password">
                        <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value="Sign Up" className="sign-up-btn"/>
                    <br/>
                    <Link to="/login" className="login-link">Log in instead</Link>
                </form>
            </div>
        )
    }
}

export default SignUpForm;