<template>
  <div>
    <Navbar v-on:scroll="changeNav"/>
    
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/partials/Navbar'
import Footer from '~/components/partials/Footer'
export default {
  components: {
    Navbar,
    Footer
  }, 
  methods: {
    changeNav() {
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
    }
    
  }
}
</script>

<style>

:root {
	--main-bg-color: #23395d;
	--main-txt-color: blue;
	--white: #fff;
	--main-padding: 15px;
}
body {
	overflow-x: hidden;
	font-family: 'Nunito', sans-serif;
	color: #505962;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
}

.btn-blue {
	background: #fff;
	color: #000;
	border: 1px solid #000;
}

.btn-blue:hover {
	background: var(--main-bg-color);
	color: #fff;
	border: 1px solid var(--main-bg-color);
}

  .nav-transparent {
	background: rgba(0, 0, 0, 0.18) !important;
	transition: 2s;
    }

    .nav-colored {
        background: var(--main-bg-color) !important;
        color: #fff !important;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .9rem;
        letter-spacing: 0.1rem;
        transition: 2s;
    }






</style>
