import axios from 'axios';

export const state = () => ({});

export const mutations = {};

export const actions = {};

export const getters = {
	isAuthenticated (state) {
		return state.auth.loggedIn;
	},

	loggedInUser (state) {
		return state.auth.user;
	},

	async getToken () {
		try {
			if (process.client) {
				return await localStorage.getItem('auth._token.local');
			}
		} catch (error) {
			console.log(error);
		}
	}
};
