// When signed in the navigataion shows the sign out button
// when not signed in the navigation shows the sign up button

import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	if (isSignedIn){
		return(
			<nav>
				<h1 className= 'title'>RoboFriends</h1>
				<a href='signin' onClick={() => onRouteChange('SignIn')}>Sign Out</a>
			</nav>
		);
	} else{
		return(
			<nav>
				<a href="#" onClick={() => onRouteChange('SignUp')}>Sign up</a>
			</nav>
		);
	}
}

export default Navigation;    