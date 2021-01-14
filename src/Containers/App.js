// Insert the users object into the robots array
// assigning them state because the users change when something is searched
// I'm commenting this wayy after creating this so i don't really get it
// As long as it works though
// filteredRobots returns the robots that have been searched in the searchfield

import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'


class App extends Component{
  constructor() {
		super()
		this.state ={
			robots : [],
			searchfield: ''
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
     
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())}
		);
		return !robots.length ?
		<h1>Loading</h1> :
		(
			<div className = 'tc'>
				<h1 className= 'f1' >RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<Scroll>
					<CardList robots = {filteredRobots}/>
				</Scroll>               
			</div>				
		);
		}
	}

export default App; 