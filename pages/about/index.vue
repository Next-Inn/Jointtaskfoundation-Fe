<template>
  <div>
    <Banner>
      <h1 slot="header">About</h1>
    </Banner>

    <section id="about-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <img src="../../assets/img/bitcoin2.jpg" alt="about-image" class="img-fluid" />
          </div>
          <div
            class="col-md-6"
            style="display: flex;  flex-flow: wrap column;  align-items: center;"
          >
            <div class="heading">
              <h1>About JTF</h1>
            </div>
            <p>
              Joint Task Foundation is a Multi Level Marketing born out of passion in offering a life changing opportunities. The founding members are all networkers who come together towards achieving a great success. 
            </p>

            <p>
              Joint Task Foundation is about helping and enriching humanity across the globe by empowering individuals and cooperate bodies. We are here to work with you and through you empower others.
            </p>
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
            <p>To eradicate poverty in the lives of people</p>
          </div>
          <div class="col-md-6">
            <div class="heading">
              <h3>Our Vision</h3>
            </div>
            <p> To be dream achievers. Search out for innovative ways to build up our organization to achieve high quality of life and prosperity for our partners and the less privileged members of the larger society. </p>
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

#about p {
  text-align: justify;
}

#about-section {
  padding: 100px 0 50px;
  min-height: 90vh;
}

#aim {
  margin: 20px 0;
}
</style>