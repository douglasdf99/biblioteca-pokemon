<template>
  <div class="p-10">
    <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen" v-if="geracoes.length > 0">
      <!-- GENERAL -->
      <vs-tab v-model="active" icon-pack="feather"  v-for="(geracao, index) in geracoes" :key="index" :label="!isSmallerScreen ? geracao.name : 'G '+(index+1)" @click="clearHistory()">
        <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
          <detalhamento :data="geracao" />
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import Detalhamento from "./Detalhamento";

export default {
  components: {
    Detalhamento,
  },
  data() {
    return {
      active :1
    }
  },
  created(){

    this.getGeracoes()
  },
  methods:{
    clearHistory(){
      this.$store.dispatch('clearHistory');
    },
    getGeracoes(){
      let dados = {
        url:'https://pokeapi.co/api/v2/generation/',
        params: {}
      }
      this.$store.dispatch('getGeracaos',dados);
    }
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
    },
    geracoes() {
      return this.$store.state.geracoes;
    }
  },
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
