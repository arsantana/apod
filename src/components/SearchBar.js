import React, { Component } from 'react';
import { DatePicker } from 'react-materialize';

export default class SearchBar extends Component {

	state = {
		date: ''
	}

	render() {
		return(
			<div className="search-bar container">
				<DatePicker 
					placeholder="Choose Date"
					onChange = {(target: {value: date}) => {
						this.setState({
							date: this.state.date
						})
					}}

				/>
			</div>
		)
	}
}