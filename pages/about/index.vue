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
            Jointtask Foundation is a marketing company birthed to raise people finanially. It is no news that many people in our country barely have a decent meal or life. joint task foundation is here to turn that around. We desire to transform the life of people who are under living into a high quality life. Together we can make that happen.
          </p>

          <p>
            The founding members are all networkers who have experienced different kinds of connections all over the world. We believe that experiencing financial freedom does not really need to cost a fortune.  Come along with us in this journey of financial experience.
          </p>
          <p>We want to partner with various people who are willing to bring ideas to the table. two good heads they say, are better than one. This partnership will increase your worth as a partner. We will help both privileged and less privileged individuals move to a beneficial point of being of great help to our larger society. We shall take you through an experience of personal development, impactful projects and financial prosperity.</p>
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

#about-section {
  padding: 100px 0 50px;
  min-height: 90vh;
}

#aim {
  margin: 20px 0;
}
</style>