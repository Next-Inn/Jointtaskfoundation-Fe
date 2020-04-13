export default function ({ app, redirect, store }) {
  // console.log(app)
  // console.log(app.$auth.loggedIn)
  if (store.state.authenticated) {
    return redirect('/user/u_dashboard')
  }
}
