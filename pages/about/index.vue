<template>
  <div>
    <Banner>
      <h1 slot="header">About</h1>
    </Banner>

    <section id="about-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <img src="./../../assets/img/bitcoin.jpg" alt="about-image" class="img-fluid" />
          </div>
          <div
            class="col-md-6"
            style="display: flex;  flex-flow: wrap column;  align-items: center;"
          >
            <div class="heading">
              <h1>About MLM</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magni, voluptatum aliquam qui, ullam vitae sunt aspernatur maiores excepturi soluta illum corporis tenetur, recusandae nulla tempore! Ullam, saepe eligendi quisquam culpa sequi necessitatibus sunt possimus maxime. Dicta, aliquam. Ut sint quasi dolores aliquid nam pariatur consequatur rem corrupti rerum praesentium!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magni, voluptatum aliquam qui, ullam vitae sunt aspernatur maiores e!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi iste pariatur incidunt vitae. Magnam labore aliquid optio id totam, consectetur vitae molestiae consequuntur debitis, error necessitatibus recusandae sit temporibus!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="aim">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="heading">
              <h3>Our Mission</h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, maxime.</p>
          </div>
          <div class="col-md-6">
            <div class="heading">
              <h3>Our Vision</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate distinctio aliquam mollitia eos minus repudiandae corporis non dolorum rerum!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from './../../components/other/Banner'
export default {
  components: { Banner }
}
</script>

<style scoped>
#about {
  margin: 120px 0;
  min-height: 75vh;
}

#about-section {
  padding: 100px 0 50px;
  min-height: 90vh;
}

#aim {
  margin: 20px 0;
}
</style>