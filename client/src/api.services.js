import axios from 'axios';
import { API_URL } from './config';

export const ApiService = {
	login: (data) => {
		return axios.default.post(API_URL + 'api/login', data);
	},

	register: (data) => {
		return axios.default.post(API_URL + 'api/register', data);
	},

    /*
	getProject: (data) => {
		return axios.get(config.API_URL + 'api/projects/' + data, {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('auth-token')),
			},
		});
	},*/
};