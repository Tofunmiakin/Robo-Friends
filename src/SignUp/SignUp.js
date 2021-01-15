import React from 'react';
import './SignUp.css';

const SignIn = ({onRouteChange}) => {
  return(
    <div className="body">
      <main className="content">
        <form>
          <fieldset >
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name"  id="name" />
            </div>
            <div>
              <label htmlFor="email-address">Email</label>
              <input type="email" name="email-address"  id="email-address" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="button">
            <input 
              className="submit" 
              type="submit" 
              value="Sign Up"
              onClick={() => onRouteChange('home')}
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

export default SignIn;