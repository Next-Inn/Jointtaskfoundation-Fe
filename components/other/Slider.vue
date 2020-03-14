<template>
  <div>
   <div class="carousel slide" id="main-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#main-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#main-carousel" data-slide-to="1"></li>
          <li data-target="#main-carousel" data-slide-to="2"></li>
          <li data-target="#main-carousel" data-slide-to="3"></li>
        </ol><!-- /.carousel-indicators -->

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="https://s19.postimg.cc/nenabzsnn/slide4.jpg" alt="sime">
            <div class="carousel-caption d-none d-md-block">
              <h1>Mountain</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="https://s19.postimg.cc/nenabzsnn/slide4.jpg" alt="">
            <div class="carousel-caption d-none d-md-block">
              <h3>Mountain</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit,
                numquam minus!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="https://s19.postimg.cc/nenabzsnn/slide4.jpg" alt="">
            <div class="carousel-caption d-none d-md-block">
              <h3>Mountain</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit,
                numquam minus!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://s19.postimg.cc/nenabzsnn/slide4.jpg" alt="" class="d-block img-fluid">
            <div class="carousel-caption d-none d-md-block">
              <h3>Mountain</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit,
                numquam minus!</p>
            </div>
          </div>
        </div><!-- /.carousel-inner -->

        <a href="#main-carousel" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only" aria-hidden="true">Prev</span>
        </a>
        <a href="#main-carousel" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only" aria-hidden="true">Next</span>
        </a>
      </div>
      <!-- /.carousel -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 1,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
    
<style scoped>
  .carousel {
      height: 100vh;
    }
    .carousel img {
      height: 100vh;
      width: 100%;
    }
</style>