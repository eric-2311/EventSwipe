# EventSwipe

Welcome to EventSwipe, an Eventbrite clone with a modern feel. Users are able to browse popular events and make registrations.

## Features

* User authentication 
* Event registration

## Technologies

* Frontend
  * React
  * Redux
  
* Backend
  * PostgreSQL
  * Ruby on Rails
  
## User Authentication

``` javascript 
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
  

  promiseHandler(){
    if (this.props.flag){
      return this.setState({renderPass: true})
    } else{
      return this.props.history.push("/signup")
    }
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
      return (
      <div>
        <div>Welcome {this.state.email}
        <br/>
        </div>
      </div>
      
      ) //input and label
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
```
