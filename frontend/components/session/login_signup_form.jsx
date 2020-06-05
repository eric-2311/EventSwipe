import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginSignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login()
    }

    render(){
        if (this.props.exists){
            return <Redirect to="/login"/>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                        type="text"
                        placeholder="email"
                        onChange={this.update('email')}/>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginSignUpForm;