import axios from 'axios';

const KEY = 'PGnGcdJW5GMx3XEqDByRZ9sCX4aG5xLUOfjs2dBL';

export default axios.create({
	baseURL: 'https://api.nasa.gov/planetary/apod',
	params: {
		date: 'YYYY-MM-DD', 
		api_key: KEY
	}
});