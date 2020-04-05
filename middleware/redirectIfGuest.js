export default function ({ app, redirect, route }){
	if (!app.$auth.loggedIn) {
		return redirect({
			name: 'user-login',
			query: {
				redirect: route.fullPath
			}
		});
	}
}
