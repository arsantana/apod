import React from 'react';
import './css/imagecard.css';

const ImageCard = (props) => {

		const {title, hdurl, explanation, date, copyright } = props.data;

		return(
			<div>
			<div className="container">
					<img className="responsive-img nasa-img" src={hdurl} alt={title} />
				</div>
			<div className="card activator" style={{margin: "50px"}}>
				<div className="card-action">
						<h4 className=" center black-text">{title}</h4>
						<h6>© {copyright} | {date}</h6>
						<br/> 
						<div className="btn grey lighten-3 black-text activator z-depth-1 waves-effect"> Learn More </div>
					</div>
				<div className="card-reveal">
					<span className="card-title close-btn activator right">&times;</span>
					<h4 className="card-title">{title}</h4>
					<p>{explanation}</p>
				</div>
			</div>
			</div>	
		)
}

export default ImageCard;

// <div className="card-action">
// 					<a href={hdurl}>View Image</a>
// 				</div>