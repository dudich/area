<template>
    <div class="select-package bg-dark-blue">
      <v-container>
        <v-layout row>
          <v-flex xl8 offset-xl2>
            <stage-list :style="{ border: '1px solid white' }"></stage-list>
            <v-layout class="pt-5 select-package__container" row wrap>
              <v-flex xs12 sm6 md3>
                <select-date class="pa-2" :input="filters.eventStart"></select-date>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <select-date class="pa-2" :input="filters.eventEnd"></select-date>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <filter-select class="pa-2" :input="filters.layout"></filter-select>
              </v-flex>
              <v-flex xs3 sm2 md1>
                <filter-input
                  class="ma-2"
                  :input="filters.capacity"
                ></filter-input>
              </v-flex>
              <v-flex xs3 sm2 md2>
                <v-btn class="btn bg-blue no-text-transform mt-2" dark round>Get Rooms</v-btn>
              </v-flex>
            </v-layout>
            <properties-list :properties="properties" :extras="extras"></properties-list>
            <modal :width="800">
              <gallery-carousel></gallery-carousel>
            </modal>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
  import StageList from '../components/StageList'
  import PropertiesList from '../components/PropertiesList'
  import FilterSelect from '../components/FormComponents/FilterSelect'
  import SelectDate from '../components/FormComponents/SelectDate'
  import FilterInput from '../components/FormComponents/FilterInput'
  import Modal from '../components/Modal'
  import GalleryCarousel from '../components/PropertiesList/PropertyGallery/GalleryCarousel'


  export default {
    name: 'select-package',

    computed: {
      properties() {
        return this.$store.getters.properties;
      },
      extras() {
        return this.$store.getters.extras;
      },
      filters() {
        return this.$store.getters.filters
      }
    },

    components: {
      StageList,
      PropertiesList,
      FilterSelect,
      SelectDate,
      FilterInput,
      Modal,
      GalleryCarousel
    }
  }
</script>

<style lang="scss" scoped>
  .select-package {
    &__container {
      border: 1px solid #fff;
    }
  }
</style>