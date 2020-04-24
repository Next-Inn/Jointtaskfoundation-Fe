const state = () => ({
	user: '',
	users: '',
	checkUsernames: '',
	checkEmails: '',
	children: '',
	balance: '',
	stage: ''
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
	},
	SET_USER_CHILDREN (state, payload) {
		state.children = payload;
	},
	SET_USER_REWARD (state, payload) {
		state.balance = payload[0];
		state.stage = payload[1];
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
	},

	async getDownlines ({ commit }) {
		try {
			const { data } = await this.$axios.$get('/user/get-down-lines');
			const children = data.children;
			commit('SET_USER_CHILDREN', children);
		} catch (e) {
			return console.log(e);
		}
	},

	async getRewards ({ commit }) {
		try {
			let stage;
			let balance;
			const { data } = await this.$axios.$get('/user/get-stage-rewards');
			balance = data.reward.balance;
			stage = data.stage_completed;
			commit('SET_USER_REWARD', [
				balance,
				stage
			]);
		} catch (e) {
			return console.log(e);
		}
	}
};

export const getters = {
	getAllUsers: (state) => state.users,
	getSingleUser: (state) => state.user,
	getAllUserNames: (state) => state.checkUsernames,
	getAllEmails: (state) => state.checkEmails,
	getChildren: (state) => state.children,
	getBalance: (state) => state.balance,
	getStage: (state) => state.stage
};
