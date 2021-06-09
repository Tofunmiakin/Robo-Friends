import React, { Component } from 'react';
import CardList from '../Components/Card/CardList';
import SearchBox from '../Components/Search/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Navigation from '../Components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

//robots, an array, is defined as a state
//The initial state of all these is set to null
//While the initial state of the route is set to SignIn and the isSignedIn is set to false
// const initialState = {
// 	robots: [],
// 	searchfield: '',
// 	user: {
// 		id: '',
// 		name: '',
// 		email: '',
// 		joined: ''
// 	}
// }

//the state of the app is then set to a default inital state as stated(heh) above
const App =()=>  {
	// constructor() {
	// 	super()
	// 	this.state = initialState;
	// }

	// this collects details and uses it to process the user for sign in or sign up
	// loadUser = (data) => {
	// 	this.setState({
	// 		user: {
	// 			id: data.id,
	// 			name: data.name,
	// 			email: data.email,
	// 			joined: data.joined
	// 		}
	// 	})
	// }

	// On mounting the component the users in the robots array state are gotten from the url below.
	// componentDidMount() {
	// 	fetch('http://localhost:3001/users')
	// 		.then(response => response.json())
	// 		.then(users => { this.setState({ robots: users }) })
	// 		.catch(console.log)
	// 		;
	// }

	//This grabs any changes to the searchbox and changes the state accordingly
	//The changes are passed into the searchField element so it can be used when filtering the robots.
	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// }

	//The robots are now filtered based on what is searched in the searchfield,
	//...i.e the robots displayed change according to the change on the searchfield
	//The filteredRobots are now passed in the prop robotlist for the cardlist 

	//The changes in the searchbox are now passed in the prop searchChange

	//If the route is in home that means it has been signed in and it will render the appropriate components
	//if not, it renders the sign in components or the signup if specified
	// render() {
		// const { robots, searchfield } = this.state;
		// const filteredRobots = robots.filter(robot => {
		// 	return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		// }
		// );
		return (
			<div>
				<Router>
					<div>
						<Route path="/" exact component={SignIn}/>
						<Route path='/SignUp' component={SignUp}/>
						<Route path='/Home' component={LandingPage}/>
					</div>
				</Router>
			</div>
		);
	}
// }
export default App;