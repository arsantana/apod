import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = {
		date: ''
	};

	onInputChange = event => {
		this.setState({ date: event.target.value})
	}; 

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.date)
	};

	render() {
		return(
			<div className="search-bar container">
				<form onSubmit={this.onFormSubmit} className="form input-field">
					<label>Enter Date</label>
					<input
						type="text"
						value={this.state.date}
						onChange={this.onInputChange}
					/>
				</form>
			</div>
		)
	}
}