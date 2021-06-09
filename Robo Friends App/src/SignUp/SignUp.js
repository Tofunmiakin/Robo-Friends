// This is the sign up form, registers a user and pushed the info to the database

import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

// The sign up email and password are defined as state
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  //This grabs the value of the change in the name field
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  //This grabs the value of the change in the email field
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  //This grabs the value of the change in the password field
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  //This sends the information typed in the registration screen to the backend to store in the database
  //It then checks with the backend if the user has an id and signs it in
  onSubmitSignUp = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
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

  render() {
    const { onRouteChange } = this.props;
    return (
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
                onClick={this.onSubmitSignUp}
              />
            </div>
          </form>
        </main>
        <Link to='/'>
          <p className="signin"> Sign In </p>
        </Link>
      </div>
    );
  }
}

export default SignUp;