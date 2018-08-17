<template>
    <div class="select-package bg-dark-blue">
      <v-container>
        <v-layout row>
          <v-flex xl8 offset-xl2>
            <stage-list></stage-list>
            <v-layout class="pt-5 select-package__container" row wrap>
              <v-flex xs12 sm6 md2>
                <filter-select
                  class="pa-2"
                  :select="select.event"
                  :items="items.selectEvent"
                  :label="labels.selectEvent"
                  @UPDATE_FILTER_SELECT_VALUE="(payload) => select.event = payload"
                ></filter-select>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <select-date
                  class="pa-2"
                  :select="select.date"
                  :label="labels.selectDate"
                  @UPDATE_FILTER_SELECT_VALUE="(payload) => select.date = payload"
                ></select-date>
              </v-flex>
              <v-flex xs3 sm2 md1>
                <input-capacity class="ma-2"></input-capacity>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <filter-select
                  class="pa-2"
                  :select="select.time"
                  :items="items.selectTime"
                  :label="labels.selectTime"
                  @UPDATE_FILTER_SELECT_VALUE="(payload) => select.time = payload"
                ></filter-select>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <filter-select
                  class="pa-2"
                  :select="select.layout"
                  :items="items.selectLayout"
                  :label="labels.selectLayout"
                  @UPDATE_FILTER_SELECT_VALUE="(payload) => select.layout = payload"
                ></filter-select>
              </v-flex>
            </v-layout>
            <properties-list :properties="properties" :extras="extras"></properties-list>
            <modal>
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
  import FilterSelect from '../components/Controlers/CustomSelect'
  import SelectDate from '../components/Controlers/SelectDate'
  import InputCapacity from '../components/Controlers/InputCapacity'
  import Modal from '../components/Modal'
  import GalleryCarousel from '../components/PropertiesList/PropertyGallery/GalleryCarousel'


  export default {
    name: 'select-package',

    data() {
      return {
        labels: {
          selectEvent: 'Select Event',
          selectDate: 'Select Date',
          selectTime: 'Select Time',
          selectLayout: 'Select Layout'
        }
      }
    },

    computed: {
      properties() {
        return this.$store.getters.properties;
      },
      extras() {
        return this.$store.getters.extras;
      },
      select() {
        return this.$store.getters.filtersSelect
      },

      items() {
        return this.$store.getters.filtersItems;
      }
    },

    components: {
      StageList,
      PropertiesList,
      FilterSelect,
      SelectDate,
      InputCapacity,
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