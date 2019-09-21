import './css/app.css';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';
import nasa from '../api/nasa';

class App extends Component {
	state = {
		image: []
	}
	onTermSubmit = async term => {
		const response = await nasa.get('/search', {
			params: {
				date: term
			}
		})

		this.setState({
			image: response.data.items
		})
	};

	render() {
		return(
			<div className="container center-align">
				<div className="heading">
					<h4 className="app-heading">Astronomy Picture of the Day</h4>
				</div>
				<SearchBar />
				<br/>
				<ImageCard />
			</div>
		)
	}
}

export default App;