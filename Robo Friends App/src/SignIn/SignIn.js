// This renders the sign in form and handles authentication for signing in

import React from 'react';
import './SignIn.css';

const url = "http://localhost:3001/signin";

// The sign in email and password are defined as state
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SignInEmail: '',
      SignInPassword: ''
    }
  }

  //This grabs the value of the change in the email field
  onEmailChange = (event) => {
    this.setState({ SignInEmail: event.target.value })
  }

  //This grabs the value of the change in the password field
  onPasswordChange = (event) => {
    this.setState({ SignInPassword: event.target.value })
  }

  //this is the action done when the submit button is clicked
  // It sends the sign in details to the backend as a json object
  // The backend then responds with a user, and if the user has an id we run the load user prop and change the route
  onSubmitSignIn = (event) => {
    event.preventDefault(); //honestly cannot remember why this is here, but it works so i'll just leave it there
    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.SignInEmail,
        password: this.state.SignInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="body">
        <main className="content">
          <form>
            <fieldset>
              <h1 className="Signin">Sign In</h1>
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
                value="Sign in"
                onClick={this.onSubmitSignIn}
              />
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignIn;