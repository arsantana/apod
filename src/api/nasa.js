import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.nasa.gov/planetary/apod',
	params: {
		date: 'YYYY-MM-DD', 
		api_key: KEY
	}
});