// This is the sign up form, registers a user and pushed the info to the database

import React, { useState } from 'react';
import './SignUp.css';
import { Link, Redirect, Route, Router } from 'react-router-dom';

// The sign up email and password are defined as state
const SignUp = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    successMsg: '',
  });

  const { name, email, password, confirmPassword, successMsg } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }
    )
  };

  const handleSumbit = (event) => {
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

  return (
    <div className="body">
      <main className="content">
        <form onSubmit={handleSumbit}>
          <fieldset >
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                name="name"
                value={name}
                type="text"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email-address">Email</label>
              <input
                type="email"
                name="email"
                id="email-address"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="password"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <div className="button">
            <input
              className="submit"
              type="submit"
              value="Sign Up"

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

export default SignUp;