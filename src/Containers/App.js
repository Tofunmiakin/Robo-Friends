// Insert the users object into the robots array
// assigning them state because the users change when something is searched
// I'm commenting this wayy after creating this so i don't really get it
// As long as it works though
// filteredRobots returns the robots that have been searched in the searchfield

import React, { Component } from 'react';
import CardList from '../Components/Card/CardList';
import SearchBox from '../Components/Search/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import SignIn from '../SignIn/SignIn';
// import SignIn from '../SignIn/SignIn';


class App extends Component{
  constructor() {
		super()
		this.state ={
			robots : [],
			searchfield: '',
			route: 'SignIn'
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

	onRouteChange = () =>{
		this.setState({route : 'home'})
	}
     
	render(){
		const {robots, searchfield, route} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())}
		);
		return (
			<div>
				{ route === 'SignIn' 
					? <SignIn onRouteChange={this.onRouteChange}/>
					: <div className = 'container'>
							<h1 className= 'title' >RoboFriends</h1>
							<SearchBox searchChange = {this.onSearchChange} />
							<Scroll>
								<CardList robots = {filteredRobots}/>
							</Scroll>               
						</div>	
				}		
			</div>
		);
		}
	}

export default App; 