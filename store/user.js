const state = () => ({
	user: '',
	users: '',
	checkUsernames: '',
	checkEmails: ''
});

export const mutations = {
	SET_USERS (state, payload) {
		state.users = payload;
	},
	SET_USER (state, payload) {
		state.user = payload;
	},
	SET_USERNAME_EMAIL (state, payload) {
		state.checkUsernames = payload.usernames;
		state.checkEmails = payload.emails;
	}
};

export const actions = {
	async getUsers ({ commit }) {
		try {
			let { data } = await this.$axios.$get('/profile/users');
			commit('SET_USER', data);
		} catch (e) {
			console.log(e);
		}
	},

	async getUserNamesAndEmails ({ commit }) {
		try {
			let usernames;
			let emails = [];
			const { data } = await this.$axios.$get('/auth/validations');

			data.forEach((user) => {
				emails.push(user.email);
			});
			usernames = data.map((item) => ({ id: item.uuid, username: item.username }));

			const payload = {
				usernames,
				emails
			};

			commit('SET_USERNAME_EMAIL', payload);
		} catch (e) {
			return console.log(e);
		}
	}
};

export const getters = {
	getAllUsers: (state) => state.users,
	getSingleUser: (state) => state.user,
	getAllUserNames: (state) => state.checkUsernames,
	getAllEmails: (state) => state.checkEmails
};
