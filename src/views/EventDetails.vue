<template>
  <div class="event-details bg-dark-blue">
    <v-container>
      <v-flex xl8 offset-xl2>
        <div class="event-details__filters" :style="{ backgroundImage: `url(${bgImage})` }">
          <div class="content">
            <h2 class="event-details__caption mt-1" v-html="caption"></h2>
            <stage-list class="mb-5"></stage-list>
            <v-layout class="pt-4" row wrap>
              <v-flex class="mb-4" xs12 sm6 md3 offset-md2>
                <filter-select
                  class="pa-2"
                  :select="select.event"
                  :items="items.selectEvent"
                  :label="labels.selectEvent"
                ></filter-select>
              </v-flex>
              <v-flex class="mb-4" xs12 sm6 md4>
                <select-date
                  class="pa-2"
                  :select="select.date"
                  :label="labels.selectDate"
                ></select-date>
              </v-flex>
              <v-flex class="mb-4" xs3 sm2 md1 offset-xs3 offset-sm5 offset-md0>
                <input-capacity class="ma-2"></input-capacity>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mb-4" xs12 sm6 md3 offset-md2>
                <filter-select
                  class="pa-2"
                  :select="select.time"
                  :items="items.selectTime"
                  :label="labels.selectTime"
                ></filter-select>
              </v-flex>
              <v-flex class="mb-4" xs12 sm6 md5>
                <filter-select
                  class="pa-2"
                  :select="select.layout"
                  :items="items.selectLayout"
                  :label="labels.selectLayout"
                ></filter-select>
              </v-flex>
            </v-layout>
            <v-btn class="btn btn-large bg-blue" dark round @click="findVenue">FIND VENUE</v-btn>
          </div>
          <div class="overlay"></div>
        </div>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
  import {FILTER_PROPERTIES} from "../store/actionTypes";
  import StageList from '../components/StageList'
  import bgImage from '../assets/event-details-bg.png'
  import FilterSelect from '../components/Controlers/FilterSelect'
  import SelectDate from '../components/Controlers/SelectDate'
  import InputCapacity from '../components/Controlers/InputCapacity'

  export default {
    name: 'event-details',

    data() {
      return {
        bgImage,
        caption: 'Tailored Solutions for Your Event',

        labels: {
          selectEvent: 'Select Event',
          selectDate: 'Select Date',
          selectTime: 'Select Time',
          selectLayout: 'Select Layout'
        }
      }
    },

    computed: {
      select() {
        return this.$store.getters.filtersSelect
      },

      items() {
        return this.$store.getters.filtersItems;
      }
    },

    methods: {
      findVenue() {
        this.$router.push('/select-package')
      }
    },

    components: {
      StageList,
      SelectDate,
      InputCapacity,
      FilterSelect
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }

  .event-details {

    &__filters {
      position: relative;
      height: 100%;
      padding: 20px;
      background: {
        repeat: no-repeat;
        size: cover;
      }
    }

    .content {
      position: relative;
      z-index: 100;
    }

    &__caption {
      margin: {
        bottom: 30px;
      }
      font-size: 40px;
      line-height: 55px;
      font-weight: 700;
      color: white;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
</style>