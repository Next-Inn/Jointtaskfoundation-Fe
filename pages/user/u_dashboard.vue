<template>
  <div>
    <section class="main">
      <DashboardNav />
      <div class="content">
        <div class="container">

          <div class="row mb-5">
            <div class="col-md-4">
              <h2 class="bold">{{ user.name }}</h2>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-3">
              <h4>
                Stage
                <span class="badge badge-info mr-2">{{ user.stage_completed }}</span>
                Balance
                <span class="badge badge-info">{{ this.balance }}</span>
              </h4>
            </div>
          </div>
          <h4>Here are your downlines</h4>
          <ul id="demo">
            <tree
              class="item"
              :item="this.treeDetails"
              :user="user"
              @make-folder="makeFolder"
            />
          </ul>
        </div>
      </div>
    </section>

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
import tree from './../../components/dashboard/tree'
import { mapGetters } from 'vuex';

export default {
  middleware: ['redirectIfAuthenticated'],
  layout: 'Udashboard',
  components: {
    DashboardNav, tree
  },

  data() {
    return {
      treeChildren: [],
      balance: '',
      stage: '',
      treeDetails: {
        ...this.$auth.user,
        children: []
      }
    }
  },

  methods: {
    async getDownlines() {
      return this.$store.dispatch('user/getDownlines')
    },

    async getReward() {
      try {
        return this.$store.dispatch('user/getRewards')
      } catch (e) {
        console.log(`this is ${e}`)
        alert('Please create a wallet')
        window.location.replace('/user/createWallet')
      }
    },

    makeFolder: function(item) {
      Vue.set(item, "children", []);
      this.addItem(item);
    }
  },

  async created() {
    this.getReward();
    this.getDownlines().then(() => {
      this.treeDetails.children = this.$store.getters['user/getChildren']
      this.balance = this.$store.getters['user/getBalance']
    });
    return this.$toast.info('DownLines Loaded Successfully', 'INFO!!!...');
  },

  computed: {
    ...mapGetters({
      user: 'loggedInUser'
    })
  }
}
</script>

<style scoped>
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
.bold{
  font-weight:700;
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
</style>