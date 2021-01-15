// When signed in the navigataion shows the sign out button
// when not signed in the navigation shows the sign up button
// I don't know how to make it show the sign in button when it is on the sign up page
// So i made another sign in button on the sign up page

import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	if (isSignedIn){
		return(
			<nav>
				<h1 className= 'title'>RoboFriends</h1>
				<a href='##' onClick={() => onRouteChange('SignIn')}>Sign Out</a>
			</nav>
		);
	} else{
		return(
			<nav>
				<a href="#0" onClick={() => onRouteChange('SignUp')}>Sign up</a>
			</nav>
		);
	}
	
}

export default Navigation;    