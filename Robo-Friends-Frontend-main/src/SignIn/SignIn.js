// This renders the sign in form and handles authentication for signing in

import React from 'react';
import './SignIn.css';

const url = "http://localhost:3001/signin";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SignInEmail: '',
      SignInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ SignInEmail: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ SignInPassword: event.target.value })
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
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