import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    debugger;
    return e => this.setState( {[field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
        // .then(() => this.props.history.push('/'))
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

  render() {
    if (this.props.user){
        return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className="login-logo">e</p>
          <br/>
          <p className="login-header">Signup or log in</p>
          <br/>
          <p className="login-message">Enter your email to get started</p>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <input className="session-submit" type="submit" value="Get Started" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

