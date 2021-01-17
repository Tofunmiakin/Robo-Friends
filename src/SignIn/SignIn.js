import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      SignInEmail: '',
      SignInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({SignInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({SignInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.SignInEmail,
        password: this.state.SignInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'success') {
          this.props.onRouteChange('home');
        }
      })
    
  }

  render(){
    return(
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