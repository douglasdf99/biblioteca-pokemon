<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="profile-page">
      <div class="flex flex-row-reverse space-x-4 space-x-reverse .." v-if="history.length > 0">
        <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-arrow-left" @click="voltar">Voltar</vs-button>
      </div>

        <!-- COL AREA -->
        <div class="vx-row">
            <!-- COL 1 -->
            <div class="vx-col w-full lg:w-1/2"  v-for="(info, index) in items"  v-if="info!= null && info!='undefined' && Object.keys(info) && Object.keys(info).length > 0 && (typeof info == 'object' || Array.isArray(items))">
              <!-- ABOUT CARD -->

              <div class="">
                <vx-card :title="index" class="mt-base" v-if="typeof info == 'object' || Array.isArray(items)">
                  <item-detal :info="info" @detalhar="loadItems"></item-detal>
                </vx-card>
              </div>

            </div>
        </div>
    </div>
</template>

<script>
import ItemDetal from '../../components/detal-items'

export default {
  props: ['data'],
  components:{
    ItemDetal
  },
  data() {
    return {

    }
  },
  created(){
    this.$store.dispatch('getItems',this.data)
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    history() {
      return this.$store.state.history;
    },
    latshistory() {
      return this.$store.getters.lastHistory;
    }
  },
  methods: {
    loadItems(data){
      this.$store.dispatch('setHistory',this.data).then(()=>{
        this.data = data;
        this.$store.dispatch('getItems',data)
      })
    },
    voltar(){
      this.$store.dispatch('getItems',this.latshistory).then(()=>{
        this.data = this.latshistory;
        this.$store.dispatch('removeHistory')
      })
    },
    loadContent() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-load-more-posts",
        scale: 0.45
      })
      setTimeout(() => {
        this.$vs.loading.close("#button-load-more-posts > .con-vs-loading")
      }, 3000);
    },
  },
  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
}

</script>


<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
