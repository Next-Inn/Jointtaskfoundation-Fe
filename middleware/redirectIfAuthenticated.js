export default function ({ app, redirect, route }) {
  if (app.$auth.loggedIn) {
    return redirect('/user/u_dashboard')
  }
}
