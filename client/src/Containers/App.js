import React, { Component } from 'react';
import CardList from '../Components/Card/CardList';
import SearchBox from '../Components/Search/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Navigation from '../Components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';


const App = () => {
	return (
		<div className="enclosement">
			<Router>
				<Switch>
					<div>
						<Route exact path="/" component={SignIn} />
						<Route exact path='/SignUp' component={SignUp} />
						<Route exact path='/Home' component={Home} />
					</div>
				</Switch>
			</Router>
		</div>
	);
}

export default App;