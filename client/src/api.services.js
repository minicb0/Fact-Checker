import axios from 'axios';
import { API_URL } from './config';

export const ApiService = {
	login: (data) => {
		return axios.default.post(API_URL + 'api/login', data);
	},

	register: (data) => {
		return axios.default.post(API_URL + 'api/register', data);
	},

	getActiveFeeds: (data) => {
		return axios.get(API_URL + 'api/dashboard/active', {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken')),
			},
		});
	},
};