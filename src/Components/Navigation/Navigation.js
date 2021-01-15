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