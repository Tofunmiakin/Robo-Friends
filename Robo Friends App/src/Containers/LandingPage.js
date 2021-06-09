import Navigation from '../Components/Navigation/Navigation';
import SearchBox from '../Components/Search/SearchBox';
import React from 'react';
import Scroll from '../Components/Scroll';
import CardList from '../Components/Card/CardList';
import { Component } from 'react';

const initialState = {
	robots: [],
	searchfield: '',
	user: {
		id: '',
		name: '',
		email: '',
		joined: ''
	}
}


class LandingPage extends Component {
  constructor() {
		super()
		this.state = initialState;
	}


  loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				joined: data.joined
			}
		})
	}

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) })
      .catch(console.log)
      ;
  }
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    }
    );
    return(
      <div>
        <Navigation/>
        <SearchBox/>
        <Scroll>
          <CardList robotList={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default LandingPage;