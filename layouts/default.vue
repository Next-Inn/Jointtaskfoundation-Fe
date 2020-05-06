<template>
  <div>
    <Navbar />

    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/partials/HomeNavbar'
import Footer from '~/components/partials/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
:root {
  --main-bg-color: #23395d;
  --main-txt-color: #22395d;
  --white: #fff;
  --main-padding: 15px;
}
body {
  overflow-x: hidden;
  font-family:'Nunito', sans-serif;
  color: #505962;
}

p {
  font-size: 20px;
}

/* html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
} */

.btn-blue {
  background: #fff;
  color: #23395d;
  border: 1px solid #23395d;
}

.btn-blue:hover {
  background: var(--main-bg-color);
  color: #fff;
  border: 1px solid var(--main-bg-color);
}
 .heading h1{
    border-bottom: 1px solid #cccccc;
    width: max-content;
    margin: auto;
    margin-bottom: 29px;
    color:#22395d;
    font-weight:900;
    } 
     .headingh1:after{
      border-bottom:3px solid #22395d;
      /* height:20px; */
      width:100px;
      text-align: center;
      display:block;
      padding:5px;
      content:'';
      margin:auto;
    }
@media(min-width:992px){
    #nav-collapse{
        display:block !important;
    }

.mt-5{
  margin-top:5rem !important;
}
.mb-5{
  margin-bottom:5rem !important;
}
.pt-5{
  padding-top:5rem !important
}
.pb-5{
  padding-bottom:5rem!important
}
}
.btn-contact {
  background:var(--main-bg-color);
  color: #ffffff;
  border: 1px solid #23395d;
}

.btn-contact:hover {
  background:  #fff;
  color: var(--main-bg-color);
  border: 1px solid var(--main-bg-color);
}
.main-footer{
      padding: 0 98px !important;
}
.main .content{
  position:relative;
  top:75px;
  }
@media(min-width: 1000px){
  .main .content{
    padding: 30px 143px !important;
    min-height: calc(100vh - 160px);
    background: #dddddd;
    position: relative;
    left: 67px;
}
.main-footer {
    background: #fff;
    position: fixed;
    /* float: right; */
    width: calc(100% - 100px);
    padding: 10px;
    bottom: 0;
    width: 100%;
    /* top: 100%; */
    text-align: center;
}
}
#sidebar {
        width: 150px;
        bottom: 0;
        float: none;
        height: 100vh;
        left: 0;
        position: fixed;
        top: 83px;
        background: var(--main-bg-color);
        color: var(--white);
        padding: 8px 0px;
        text-align: center;
        display: block;
        z-index: 1;
        color: #fff;
        font-weight: 600;
        border-top: 3px solid #a20a11;
        transition: 2s;
        max-height:100%;
    }
.navbar-collapse {
  transition: 2s;
}
.form-group label{
      font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
}
.font-bold-blue{
 color: rgb(34, 57, 93);
 font-weight:900;
}
/* gs, */


/* gs, */
</style>
