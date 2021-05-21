import React, { Component } from 'react';
import CardList from '../Components/Card/CardList';
import SearchBox from '../Components/Search/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Navigation from '../Components/Navigation/Navigation';

const initialState ={
		robots : [],
		searchfield: '',
		route: 'SignIn',
		isSignedIn : false,
		user: {
			id: '',
			name: '',
			email: '',
			joined:''
		}
}

class App extends Component{
  constructor() {
		super()
		this.state = initialState;	
	}

	loadUser = (data) =>{
		this.setState({user:{
			id: data.id,
			name: data.name,
			email: data.email,
			joined: data.joined
		}})
	}
	
	componentDidMount() { 
		fetch('http://localhost:3001/')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})})
				.catch(console.log)
;	}


	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	onRouteChange = (route) =>{
		if (route === 'SignIn'){
			this.setState({initialState})
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
								<CardList robotList = {filteredRobots}/>
							</Scroll>               
						</div>	
					: (
							route === 'SignIn'
							?<div>
								<Navigation onRouteChange={this.onRouteChange}/>
								<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
							 </div>
							:<div>
								<Navigation onRouteChange={this.onRouteChange}/>
								<SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
							 </div>
						)
				}		
			</div>
		);
		}
	}

export default App; 