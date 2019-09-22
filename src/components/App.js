import './css/app.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ImageCard from './ImageCard';
import Footer from './Footer';


class App extends Component {
	constructor() {
		super();

		this.state = {
			imageData: [],
		}
	}

	componentDidMount() {
		const API_KEY = 'PGnGcdJW5GMx3XEqDByRZ9sCX4aG5xLUOfjs2dBL';
		const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';

		axios.get(END_POINT+API_KEY)
			.then(response => {
				this.setState({
					imageData: response.data
				})
			})
			.catch(error => {
				console.log(error, 'failed to fetch data')
			});
	}

	render() {

		const { imageData } = this.state;

		return(
			<div className="App">
				<Header />
				<div className="container center-align">
					<div className="heading">
						
						<h6 className="white-text">{imageData.date}</h6>
					</div>
					<br/>
					<ImageCard data={imageData} />
					</div>
				<Footer />
			</div>
		)
	}
}

export default App;