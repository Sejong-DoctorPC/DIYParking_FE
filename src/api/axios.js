import axios from 'axios';

export default axios.create({
	//baseURL: 'http://localhost:3500',
  baseURL: 'https://sejong-uspace.herokuapp.com',
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
