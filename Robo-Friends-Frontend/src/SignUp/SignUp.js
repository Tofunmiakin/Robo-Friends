// This is the sign up form, registers a user and pushed the info to the database

import React from 'react';
import './SignUp.css';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render(){
    const {onRouteChange} =this.props;
    return(
      <div className="body">
        <main className="content">
          <form>
            <fieldset >
              <h1>Sign Up</h1>
              <div>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  name="name"  
                  id="name" 
                  onChange={this.onNameChange}
                />
              </div>
              <div>
                <label htmlFor="email-address">Email</label>
                <input 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange={this.onEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  name="password"  
                  id="password" 
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="button">
              <input 
                className="submit" 
                type="submit" 
                value="Sign Up"
                onClick={this.onSubmitSignIn}
              />
            </div>
          </form>
        </main>
        <p 
        className="signin"
        onClick={() => onRouteChange('SignIn')}
        > Sign In </p>
      </div>
    );
  }
}

export default SignUp;