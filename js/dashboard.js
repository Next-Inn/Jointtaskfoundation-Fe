// load template for headers and footer

const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const adminDashboardHeader = document.querySelector('#adminDashboardHeader');
const adminDashboardFooter = document.querySelector('#adminDashboardFooter');
const adminDashboardSidebar = document.querySelector('#adminDashboardSidebar');
let argUrl = window.location.pathname;

document.addEventListener("DOMContentLoaded", loadDoc);
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../template/admin_dashboard_sidebar.html', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			adminDashboardSidebar.innerHTML = this.responseText;
			switch (argUrl) {
				case '/dashboard.html':
					userDashboardHeader.querySelector('#dashboard').classList.add('active');
					break;
				case '/profile.html':
					userDashboardHeader.querySelector('#userList').classList.add('active');
					break;

				default:
					break;
			}
		}
    };
    
    var xhttp = new XMLHttpRequest();
	xhttp.open('GET', '../template/admin_dashboard_header.html', true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			adminDashboardHeader.innerHTML = this.responseText;
		}
	};
	// var xhttp = new XMLHttpRequest();
	// xhttp.open('GET', 'template/admin_dashboard_header.html', true);
	// xhttp.send();
	// xhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		adminDashboardHeader.innerHTML = this.responseText;
	// 		switch (argUrl) {
	// 			case '/admin-dashboard.html':
	// 				adminDashboardHeader.querySelector('#adminDashboard').classList.add('active');
	// 				break;
	// 			case '/admin-profile.html':
	// 				adminDashboardHeader.querySelector('#adminProfile').classList.add('active');
	// 				break;
	// 			case '/a-vieworder.html':
	// 				adminDashboardHeader.querySelector('#viewOrder').classList.add('active');
	// 				break;
	// 			case '/admin-edit-profile.html':
	// 				adminDashboardHeader.querySelector('#adminEditProfile').classList.add('active');
	// 				break;
	// 			case '/client.html':
	// 				adminDashboardHeader.querySelector('#client').classList.add('active');
	// 				break;

	// 			default:
	// 				break;
	// 		}
	// 	}
	// };

}