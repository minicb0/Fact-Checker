import axios from 'axios';
import { API_URL } from './config';

export const ApiService = {
	login: (data) => {
		return axios.default.post(API_URL + 'api/login', data);
	},

	register: (data) => {
		return axios.default.post(API_URL + 'api/register', data);
	},

	getActiveFeeds: () => {
		return axios.get(API_URL + 'api/dashboard/active', {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken')),
			},
		});
	},

	getAllActiveFeeds: () => {
		return axios.get(API_URL + 'api/activeNews', {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken')),
			},
		});
	},

	createNews: (data) => {
		return axios.default.post(API_URL + 'api/createNews', data, {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken'))
			},
		});
	},

	closeNews: (data) => {
		return axios.default.post(API_URL + 'api/closeNews', data, {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken'))
			},
		});
	},

	addJournalist: (data) => {
		return axios.default.post(API_URL + 'api/addJournalist', data, {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken'))
			},
		});
	},

	postVote: (data) => {
		return axios.default.post(API_URL + 'api/postVote', data, {
			headers: {
				Authorization: 'Bearer '.concat(localStorage.getItem('apiToken'))
			},
		});
	}
};