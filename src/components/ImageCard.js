import React, { Component } from 'react';

export default class ImageCard extends Component {
	render() {
		return(
			
					<div className="card" style={{margin: "50px"}}>
						<div className="card-image">
							<img src="" alt="" />
							<span className="card-title center-align">Card Title</span>
						</div>
						<div className="card-content">
							<p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
						</div>
						<div className="card-action">
							<a href="#">Link</a>
						</div>
					</div>
				
		)
	}
}
