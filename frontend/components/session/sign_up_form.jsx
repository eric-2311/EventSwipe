import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        }
        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.removeErrors()
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
            
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }
    
    render(){
        // if (this.props.login(this.state)){
        //     return <Redirect to="/"/>
        // }

        return (
            <section>
            <div className="signup-pic-container">
                    <img src={window.profpicURL} className="signup-pic"/>
                </div>
            <div className="signup-errors">
                {this.renderErrors()}
            </div>
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
                            className="sign-up-first"
                            // size="9"
                            />
                        </label>
                        <label>
                            <input
                            type="text"
                            placeholder="last name"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className="sign-up-last"
                            // size="8"
                            />
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
            </section>
        )
    }
}

export default SignUpForm;