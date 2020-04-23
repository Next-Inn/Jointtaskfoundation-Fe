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
}
/* gs, */


/* gs, */
</style>
