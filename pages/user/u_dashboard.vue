<template>
  <div>
    
<transition name="slide-side">
    <section class="main">
      
         <DashboardNav />
     
     
      <div class="content">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-3">
              <h4>{{user.name}}</h4>
            </div>
            <div class="col-md-4"></div>
            
            <div class="col-md-3">
              <h5>
                Level
                <span class="badge badge-info mr-2">{{ user.hierarchyLevel }}</span>
                Balance
                <span class="badge badge-success">{{ balance }}</span>
              </h5>
            </div>
            <div class="col-md-2">
              <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Reward
            </button>
            </div>
          </div>
                        

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Reward</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <div class="reward-container">
                    <div class="row text-center">
                      <div class="col-md-6">
                        <h3><i class="fa fa-diamond"></i> Reward</h3>
                      </div>
                      <div class="col-md-6">
                        <h3>{{ reward }}</h3>
                      </div>
                    </div>
                  </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
                    
        </div>
      </div>
    </section>
 </transition>
    <footer class="main-footer">
      <strong>
        Copyright &copy; 2020
        <a href="#">HackTeam</a>.
      </strong>
      All rights reserved.
      <div class="pull-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.2
      </div>
    </footer>
     
  </div>

</template>

<script>
import DashboardNav from './../../components/partials/DashboardNavbar'
import { mapGetters } from 'vuex'
export default {
  middleware: ['redirectIfAuthenticated'],
  layout: 'Udashboard',
  components: {
    DashboardNav
  },
  data() {
    return {}
  },
  methods: {
    async getDownlines() {
      return this.$store.dispatch('user/getDownlines')
    },
    async getReward() {
      try {
        return this.$store.dispatch('user/getRewards')
        console.log()
      } catch (e) {
        console.log(`this is ${e}`)
        alert('Please create a wallet')
        window.location.replace('/user/createWallet')
      }
    }
  },
  created() {
    this.getReward(), this.getDownlines()
  },
  computed: {
    ...mapGetters({
      childrens: 'user/getChildren',
      balance: 'user/getBalance',
      stage: 'user/getStage',
      user: 'loggedInUser'
    }),
    toggleSidebar() {
        return this.$store.getters['nav/toggleSidebar']
    },
    toggleHeader() {
        return this.$store.getters['nav/toggleHeader']
    }
  }
}
</script>

<style scoped>
.main {
  background: rgba(203, 203, 210, 0.15);
  position: relative;
  float: right;
  width: calc(100% - 100px);
}
.main-1 {
  width: 100%;
  background: antiquewhite;
  height: 100vh;
}
.main .content {
  padding: 30px 15px;
  min-height: calc(100vh - 160px);
  /* margin-top: 30px; */
  background: #fffbfb;
}
.pointer {
  width: 4px;
  height: 30px;
  border: 1px solid #000;
  margin: 20px auto;
  background: #000;
}
.small-img {
  height: 30px;
}
p {
  font-size: 13px;
}
.card {
  border-radius: 12px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  background-color: var(--main-bg-color);
  color: #252422;
  margin-bottom: 20px;
  position: relative;
  border: 0 none;
  transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;
}
.card-header {
  background: #fff;
  border-radius: 12px;
}
.card-stats .card-body .numbers .card-category {
  color: #fff;
  font-size: 18px;
  line-height: 1.4em;
  font-weight: 600;
}
.card-stats .card-body .numbers p {
  margin-bottom: 0;
  text-align: right;
  color: #fff;
  letter-spacing: 2px;
}
.card-stats .card-body .numbers .balance {
  font-size: 28px;
  font-weight: 900;
}
.card-stats .icon-big {
  font-size: 3em;
  min-height: 64px;
}

.reward-container {
  background: var(--main-bg-color);
  padding: 20px 10px;
}

.reward-container h3 {
  color: #fff;
}
.main-footer {
  background: rgba(203, 203, 210, 0.15);
  position: relative;
  float: right;
  width: calc(100% - 100px);
  padding: 10px;
}

.slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateX(-100%);
    }
</style>