// Insert the users object into the robots array
// assigning them state because the users change when something is searched
// I'm commenting this wayy after creating this so i don't really get it
// As long as it works though
// filteredRobots returns the robots that have been searched in the searchfield
// Defined the routing on the site and condition whether one is signed in or not

import React, { Component } from 'react';
import CardList from '../Components/Card/CardList';
import SearchBox from '../Components/Search/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Navigation from '../Components/Navigation/Navigation';


class App extends Component{
  constructor() {
		super()
		this.state ={
			robots : [],
			searchfield: '',
			route: 'SignIn',
			isSignedIn : false
		}
	}
	
	componentDidMount() { 
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => {this.setState({robots: users})});
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	onRouteChange = (route) =>{
		if (route === 'SignIn'){
			this.setState({isSignedIn: false})
		} else if (route === 'home'){
			this.setState({isSignedIn: true})
		} 
		this.setState({route : route});
	}
     
	render(){
		const {robots, searchfield, route, isSignedIn} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())}
		);
		return (
			<div>
				{ route === 'home' 
					?  <div className = 'container'>
							<Navigation
							 isSignedIn={isSignedIn}
							 onRouteChange={this.onRouteChange}
							/>
							<SearchBox searchChange = {this.onSearchChange} />
							<Scroll>
								<CardList robots = {filteredRobots}/>
							</Scroll>               
						</div>	
					: (
							route === 'SignIn'
							?<div>
								<Navigation onRouteChange={this.onRouteChange}/>
								<SignIn onRouteChange={this.onRouteChange}/>
							 </div>
							:<div>
								<Navigation onRouteChange={this.onRouteChange}/>
								<SignUp onRouteChange={this.onRouteChange}/>
							 </div>
						)
				}		
			</div>
		);
		}
	}

export default App; 