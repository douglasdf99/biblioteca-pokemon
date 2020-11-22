<!-- =========================================================================================
    File Name: VxTour.vue
    Description: Tour Component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<template lang="html">

  <div class="">
    <!--  NIVEL 1 ARRAY-->
    <div v-if="getType(info) == 'array'" >
      <vs-table max-items="3" pagination :data="info" v-if="info">
        <template slot="thead" v-for="(tr, indextr) in tabs">
          <vs-th v-if="tr == 'url'">Action</vs-th>
          <vs-th v-else>{{tr}}</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td v-for="(tr2, indextr2) in tabs">
              <div class="" v-if="tr2 == 'url'">
                <vs-button color="primary" type="border" icon-pack="feather" icon="icon-plus" @click="$emit('detalhar', data[indextr])">Ver mais</vs-button>
              </div>
              <div class="" v-else>
                <div class="" v-if="getType(getElement(data[indextr],tr2))  == 'object'">
                  <div class="mt-5" v-for="(colum,index) in getElement(data[indextr],tr2)">
                    <div class="d-flex" v-if="index != 'url'">

                      <h6>{{index}}: </h6>
                      <!--  NIVEL 2 obj-->
                      <div class="ml-4" v-if="getType(colum) == 'n'" >
                        <p class="">{{colum}}</p>
                      </div>

                      <div class="ml-4" v-if="getType(colum) == 'array'">
                        <vs-table :data="colum">
                          <template slot="thead" v-for="(tr2, indextr) in getTabs(colum)">
                            <vs-th v-if="tr2 == 'url'">Action</vs-th>
                            <vs-th v-else>{{tr2}}</vs-th>
                          </template>

                          <template slot-scope="{data}">
                            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                              <vs-td v-for="tr2 in getTabs(tr)">
                                <div class="" v-if="tr2 == 'url'">
                                  <vs-button color="primary" type="border" icon-pack="feather" icon="icon-plus" @click="$emit('detalhar', data[indextr])">Ver mais</vs-button>
                                </div>
                                <div class="" v-else>
                                  imprimiu{{getElement(data[indextr],tr2)}}
                                </div>
                              </vs-td>
                            </vs-tr>
                          </template>
                        </vs-table>
                      </div>

                      <div class="ml-4" v-if="getType(colum) == 'object'" v-for="(colum2,index2) in colum">
                            <div class="d-flex" v-if="index2 != 'url'">
                              <h6>{{index2}}: </h6>
                              <!--  NIVEL 2 obj-->
                              <div class="ml-4" v-if="getType(colum2) == 'n'" >
                                <p class="">{{colum2}}</p>
                              </div>

                              <div class="ml-4" v-if="getType(colum2) == 'array'">
                                <vs-table :data="colum2">
                                  <template slot="thead" v-for="(tr2, indextr) in getTabs(colum2)">
                                    <vs-th v-if="tr2 == 'url'">Action</vs-th>
                                    <vs-th v-else>{{tr2}}</vs-th>
                                  </template>

                                  <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                      <vs-td v-for="tr2 in getTabs(tr)">
                                        <div class="" v-if="tr2 == 'url'">
                                          <vs-button color="primary" type="border" icon-pack="feather" icon="icon-plus" @click="$emit('detalhar', data[indextr])">Ver mais</vs-button>
                                        </div>
                                        <div class="" v-else>
                                          {{getElement(data[indextr],tr2)}}
                                        </div>
                                      </vs-td>
                                    </vs-tr>
                                  </template>
                                </vs-table>
                              </div>

                            </div>
                            <div class="" v-else>
                              <vs-button icon-pack="feather" icon="icon-plus" class="w-full" @click="$emit('detalhar', info)">Detalhar</vs-button>
                            </div>
                      </div>

                    </div>
                    <div class="" v-else>
                      <vs-button icon-pack="feather" icon="icon-plus" class="w-full" @click="$emit('detalhar', info)">Detalhar</vs-button>
                    </div>
                  </div>
                </div>
                <div class="" v-else>
                  <div class="mt-5">
                    <h6>{{getElement(data[indextr],tr2)}}</h6>
                  </div>
                </div>
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

      <!--  NIVEL 1 obj-->
    <div class="" v-else-if="getType(info)  == 'object'">
      <div class="mt-5" v-for="(colum,index) in info">
        <div class="d-flex" v-if="index != 'url'">
          <h6>{{index}}: </h6>

          <!--  NIVEL 2 obj-->
          <div class="ml-4" v-if="getType(colum) == 'n'" >
            <p class="">{{colum}}</p>
          </div>

          <div class="ml-4" v-if="getType(colum) == 'array'">
            <vs-table :data="colum">
              <template slot="thead" v-for="(tr2, indextr) in getTabs(colum)">
                <vs-th v-if="tr2 == 'url'">Action</vs-th>
                <vs-th v-else>{{tr2}}</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td v-for="tr2 in getTabs(tr)">
                    <div class="" v-if="tr2 == 'url'">
                      <vs-button color="primary" type="border" icon-pack="feather" icon="icon-plus" @click="$emit('detalhar', data[indextr])">Ver mais</vs-button>
                    </div>
                    <div class="" v-else>
                      {{getElement(data[indextr],tr2)}}
                    </div>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

          <div class="ml-4" v-if="getType(colum) == 'object'" v-for="(colum3,index3) in colum">
            <h6>{{index3}}:</h6>
            <div class="" v-if="typeof colum == 'object'">
              <div class="mt-5" v-for="(colum2,index2) in colum">
                <div class="d-flex" v-if="index2 != 'url'">
                  <h6>{{index2}}: </h6>
                  <!--  NIVEL 2 obj-->
                  <div class="ml-4" v-if="getType(colum2) == 'n'" >
                    <p class="">{{colum2}}</p>
                  </div>

                  <div class="ml-4" v-if="getType(colum2) == 'array'">
                    <vs-table :data="colum2">
                      <template slot="thead" v-for="(tr2, indextr) in getTabs(colum2)">
                        <vs-th v-if="tr2 == 'url'">Action</vs-th>
                        <vs-th v-else>{{tr2}}</vs-th>
                      </template>

                      <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                          <vs-td v-for="tr2 in getTabs(colum2)">
                            <div class="" v-if="tr2 == 'url'">
                              <vs-button color="primary" type="border" icon-pack="feather" icon="icon-plus" @click="$emit('detalhar', data[indextr])">Ver mais</vs-button>
                            </div>
                            <div class="" v-else>
                              {{getElement(data[indextr],tr2)}}
                            </div>
                          </vs-td>
                        </vs-tr>
                      </template>
                    </vs-table>
                  </div>

                </div>
                <div class="" v-else>
                  <vs-button icon-pack="feather" icon="icon-plus" class="w-full" @click="$emit('detalhar', info)">Detalhar</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="" v-else>
          <vs-button icon-pack="feather" icon="icon-plus" class="w-full" @click="$emit('detalhar', info)">Detalhar</vs-button>
        </div>
      </div>
    </div>

    <!--  NIVEL 1 N-->
    <div class="" v-else>
      <div class="mt-5">
        <h6>{{info}}</h6>
      </div>

    </div>

  </div>
</template>

<script>
  import translate from 'translate';

  export default {
    name: 'item-detal',
    props: ['info'],

    mounted() {

    },
    methods: {
      //funcçoes table
      getElement(linha, campo) {
        let itemTable = '';
        if (typeof linha[campo] == 'object') {
          for (var [key, value] of Object.entries(linha[campo])) {
            //tratamento de retorno link no nome
            return value
          }
          itemTable = linha[campo]
        } else {
          itemTable = linha[campo]
        }
        return itemTable
      },
      getTabs(info) {
        let tabs = [];
        info.map(function (value, key) {

          for (var [key, value2] of Object.entries(value)) {
            console.log('value gettabs', key)
            if (!tabs.includes(key)) {
              tabs.push(key)
            }
          }
        });
        return tabs
      },

      //funções object

      //getType
      getType(element){
        if(Array.isArray(element)){
          return 'array'
        }
        if(typeof element == 'object'){
          return 'object'
        }
        else{
          return 'n'
        }
      }

    },
    computed: {
      tabs() {
        let tabs = [];
        this.info.map(function (value, key) {
          for (var [key, value2] of Object.entries(value)) {
            // if (key == 'url'){
            //   key = 'action';
            // }

            if (!tabs.includes(key)) {
              tabs.push(key)
            }
          }
        });

        return tabs
      }
    }

  }
</script>

<style lang="scss">
  .v-tour {
    .v-step {
      z-index: 55000;
      background-color: rgba(var(--vs-primary), 1);
      border-radius: .5rem;
      padding: 1.5rem;
      filter: drop-shadow(0 0 7px rgba(0, 0, 0, .5));

      .v-step__arrow {
        border-color: rgba(var(--vs-primary), 1);
      }

      .vs-button-border:not(.btn-tour-next):not(.btn-tour-finish) {
        border-color: rgba(255, 255, 255, .5) !important;
      }
    }
  }
</style>
