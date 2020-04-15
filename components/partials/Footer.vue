<template>
    <div>
        <footer class="footer-layer">
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-md-5">
            <h3>About JTF</h3>
            <p class="mt-5">Jointtask Foundation is a marketing company birthed to raise people finanially.  </p>
           <hr class="color-ccc">
            <div>
                <a href="#">
                <span class="fa fa-facebook"></span>
              </a>
              <a href="#">
                <span class="fa fa-twitter"></span>
              </a>
              <a href="#">
                <span class="fa fa-instagram"></span>
              </a>
              <a href="#">
                <span class="fa fa-google-plus"></span>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-5 quick-links">
            <h3>Quick Links</h3>
            <ul class="contact-info mt-5">
              <li class=""><a href="index.html">Home</a></li>
              <li class="mt-3"><a href="about.html">About Us</a></li>
              <li class="mt-3"><a href="plan.html">Marketing Plan</a></li>
              <li class="mt-3"><a href="signup.html">Sign Up</a></li>
              <li class="mt-3"><a href="login.html">Login</a></li>
            </ul>
          </div>
          <div class="col-md-4 col-7">
            <div class="contact-info-section">
              <h3> Reach Us on...</h3>
              <ul class="mt-5 contact-info">
                <li><i class="fa fa-map-marker"></i> 21 Revolution Street</li>
                <li><i class="fa fa-phone"></i> 08067488682, 08090066060</li>
                <li><i class="fa fa-envelope"></i> 21 Revolution Street</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr>
        <div class="container">
          <p class="text-center">&copy; Built with pride 2020. </p>
        </div>
      </div>
    </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
/* footer */

footer {
	background: var(--main-bg-color);
	color: #eae6e6;
	/* min-height: 91vh; */
	padding: 20px 0;
	font-size: 18px;
	/* font-family: 'Nunito', sans-serif; */
}

.contact-info {
	list-style: none;
	padding: 0px;
}

footer hr {
	background: #fff;
}

.footer-icons a {
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	border-radius: 2px;
	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;
	margin-right: 3px;
	margin-bottom: 5px;
}

.footer-layer {
	flex-flow: wrap column;
	align-items: space-between;
  justify-content: space-between;
  
}

.contact-info i {
	color: #ffffff;
	font-size: 20px;
	width: 38px;
	height: 38px;
	text-align: center;
	line-height: 42px;
	/* margin: 10px 8px; */
	vertical-align: middle;
	padding: 0px 4px;
}
.footer-layer span {
    color: #eae6e6;
    border: 2px solid #eae6e6;
    padding: 4px 4px;
    min-width: 34px;
    text-align: center;
    margin-right: 12px;
    /* transform: skewY(20deg); */
}
.footer-layer span:hover {
    color: #5ef4da;
    transition:2s;
    border: 2px dashed #5ef4da;
     transform:0;
}
.contact-info div {
	display: flex;
}

.contact-info p span {
	display: block;
	font-weight: normal;
	font-size: 16px;
	line-height: 2;
}

.contact-info p {
	font-size: 18px;
}

.quick-links a {
	text-decoration: none;
	color: #fff !important;
	cursor: pointer;
	font-size: 16px;
}

.quick-links a:before {
	font-family: "Font Awesome 5 Free";
	left: 0;
	font-size: 15px;
	color: #eae6e6;
	content: "\f04";
	font-weight: bold;
	padding-right: 11px;
}
.footer-layer h3{
  color:#eae6e6;
  /* border-bottom:2px solid ; */
width:max-content;
}
.color-ccc{
  border-color:#ccc;
}
</style>