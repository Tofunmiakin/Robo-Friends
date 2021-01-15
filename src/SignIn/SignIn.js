import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
  return(
    <div className="body">
      <main className="content">
        <form>
          <fieldset >
            <h1 className="Signin">Sign In</h1>
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
              value="Sign in"
              onClick={() => onRouteChange('home')}
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignIn;