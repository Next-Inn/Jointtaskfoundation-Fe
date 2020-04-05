// export default function ({ app, redirect }){
// 	if (!app.$auth.loggedIn) {
// 		return redirect('/admin/login');
// 	}
// }


export default function ({ app, redirect, store }) {
  // console.log(app)
  // console.log(app.$auth.loggedIn)
  if (store.state.authenticated) {
    return redirect('/user/u_dashboard')
  }
}
