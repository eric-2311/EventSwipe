import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'; 

class LoginForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      email: '',
      password: '',
      renderPass: false,
      exists: this.props.exists
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPassInput = this.renderPassInput.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    // this.chooseFrom = this.chooseForm.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.promiseHandler = this.promiseHandler.bind(this);
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value });
  }

  validEmail(email){
    if (email.split('@').length === 2 && email.split('@')[1].includes(".") ){
      return true;
    }
    false;
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.renderPass){
        return this.props.processForm(user)
    } else{
      this.props.receiveEmail(this.state.email)
        .then(() => { 
          return this.promiseHandler()
        })
      }
  }

  promiseHandler(){
    if (this.props.flag){
      return this.setState({renderPass: true})
    } else{
      return this.props.history.push("/signup")
    }
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

  renderPassInput(){
    if (this.state.renderPass === true){
      return (
        <label>
        <input type="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.update('password')}
          className="login-input"
        />
      </label>
      )
    } else{
      return null;
    }
  }

  renderEmailInput(){
    if (this.state.renderPass === true){
      return <div>Welcome {this.state.email}</div> //input and label
    } else{
      return (
        <label>
          <input type="text"
            value={this.state.email}
            placeholder="email"
            onChange={this.update('email')}
            className="login-input"/>
        </label>
      );
    }
  }

  render() {
    if (this.props.renderPass){
      return <Redirect to="/" />
    } 


    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className="login-logo">e</p>
          <br/>
          <p className="login-header">Sign up or log in</p>
          <br/>
          <p className="login-message">Enter your email to get started</p>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            {this.renderEmailInput()}
            {this.renderPassInput()}
            <br/>
            <br/>
            <input className="session-submit" type="submit" value="Get Started" />
            <br/>
            <br/>
            <p className="login-message">or</p>
            <br/>
            <input className="session-submit2" 
                type="submit" value="Demo Login" 
                onClick={() => this.props.processForm(
              {email: "demo@mail.com", password: "demopassword"}
              )} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);

