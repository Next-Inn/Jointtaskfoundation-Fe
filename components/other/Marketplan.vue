<template>
  <div>
    <!-- <Banner>
      <h1 slot="header">Marketing Plan</h1>
    </Banner> -->

    <section id="intro">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="heading ">
              <h1>How We Operate</h1>
            </div>
            <p>
            Joint Task Foundation is about helping and enriching humanity across the globe by empowering individuals and cooperate bodies. We are here to work with you and through you empower others.
          </p></div>
        </div>
      </div>
    </section>

    <section id="plan">
      <div class="container">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div
              class="card-header"
              id="headingOne"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h2 class="mb-0">
                <button
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >STAGE1 BUILDER (2 X 2 FEEDER MATRIX)</button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p>You are expected to bring in TWO partners ONLY. This serves as the feeder matrix, feeding stages 2 to stages 8/infinity of this compensation plan. When a member sponsors more than 2 people with his Username, the rest will spill down to down liners.</p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">STAGE1 BUILDER</th>
                      <th scope="col">NO OF PEOPLE</th>
                      <th scope="col">BONUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Level 1</td>
                      <td>2</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Level 2</td>
                      <td>4</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>Total</td>
                      <td>6</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >STAGE 2 - SAPPHIRE</button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >STAGE 3 - RUBY</button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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

<style  scoped>
#intro {
  margin: 60px 0;
}

#plan {
  margin: 60px 0;
}
</style>