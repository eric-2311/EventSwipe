import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => { 
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            // .then(this.props.login(this.state))
        this.setState({
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        })
            // 
        // <Redirect to="/" />
    }
    
    render(){
        // if (this.props.login(this.state)){
        //     return <Redirect to="/"/>
        // }

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
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            size="9"/>
                        </label>
                        <label className="sign-up-name">
                            <input
                            type="text"
                            placeholder="last name"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
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