const state = () => ({
	user: '',
	users: '',
	userNames: []
});

export const mutations = {
	SET_USERS (state, payload) {
		state.users = payload;
	},
	SET_USER (state, payload) {
		state.user = payload;
	},
	SET_USERNAME (state, payload) {
		state.userNames = payload;
	}
};

export const actions = {
	async getUsers ({ commit }) {
		try {
			let { data } = await this.$axios.$get('/profile/users');
			commit('SET_USERS', data);
		} catch (e) {
			console.log(e);
		}
	},

	async getUserNames ({ commit }) {
		try {
			let usernames = [];
			const { data } = await this.$axios.$get('/auth/usernames');

			data.forEach((user) => {
				usernames.push(user.username);
			});

			commit('SET_USERNAME', usernames);
		} catch (e) {
			return console.log(e);
		}
	}
};

export const getters = {
	getAllUsers: (state) => state.users,
	getSingleUser: (state) => state.user,
	getAllUserNames: (state) => state.userNames
};
