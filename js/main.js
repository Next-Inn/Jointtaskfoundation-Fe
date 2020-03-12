
//To load template for header and footer
const header = document.querySelector('#header'),
	footer = document.querySelector('#footer'),
	userDashboardHeader = document.querySelector('#userDashboardHeader'),
	userDashboardfooter = document.querySelector('#userDashboardfooter'),
	adminDashboardHeader = document.querySelector('#adminDashboardHeader');
let argUrl = window.location.pathname;

document.addEventListener('DOMContentLoaded', loadDoc);
function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'template/header.html', true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
			header.innerHTML = this.responseText;

			switch (argUrl) {
				case '/index.html':
					header.querySelector('#home').classList.add('active');
					break;
				case '/about.html':
					header.querySelector('#about-nav').classList.add('active');
					break;
				case '/plan.html':
					header.querySelector('#plan-nav').classList.add('active');
					break;
				case '/contact.html':
					header.querySelector('#contact-nav').classList.add('active');
					break;
				case '/signUp.html':
					header.querySelector('#signUp-nav').classList.add('active');
          break;
        case '/login.html':
          header.querySelector('#signUp-nav').classList.add('active');
          break;

				default:
					break;
			}
		}
	};
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'template/footer.html', true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			footer.innerHTML = this.responseText;
		}
	};
}


  window.onscroll = function(){
    const navItem = document.getElementById("navBar");
    if(document.body.scrollTop < 0 || document.documentElement.scrollTop > 5){
      navItem.classList.add("nav-colored");
      navItem.classList.remove("nav-transparent");
    }else{
      navItem.classList.add("nav-transparent");
      navItem.classList.remove("nav-colored");
    }
  }

// console.log(navList)

// const navList = document.getElementById("navBar");
// window.onscroll = function(){
//   if(document.body.scrollTop < 0 || document.documentElement.scrollTop > 5){
//     navBar.classList.add("navTransparent");
//     navBar.classList.remove("navBar");
//   }else{
//     navBar.classList.add("navBar");
//     navBar.classList.remove("navTransparent");
//   }
// }

// Sign up page
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    // document.getElementById("nextBtn").style.display="none"
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}


function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
      //...the form gets submitted:
      document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }


  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }