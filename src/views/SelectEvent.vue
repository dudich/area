<template>
  <div class="event-details bg-dark-blue">
    <v-container>
      <v-flex xl8 offset-xl2>
        <div class="event-details__filters" :style="{ backgroundImage: `url(${bgImage})` }">
          <div class="content">
            <h2 class="event-details__caption mt-1" v-html="caption"></h2>
            <stage-list class="mb-5"></stage-list>
            <v-layout class="pt-4" row wrap>
              <v-flex class="mb-5 px-2" xs12 md5 sm6 offset-xs0 offset-md1>
                <select-date
                  :input="filters.eventStart"
                  :notBefore="notBeforeStart"
                ></select-date>
              </v-flex>
              <v-flex class="mb-5 px-2" xs12 md5 sm6>
                <select-date
                  :input="filters.eventEnd"
                  :notBefore="notBeforeEnd"
                ></select-date>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mb-4" xs12 md5 sm6 offset-xs0 offset-md1>
                <filter-select
                  class="pa-2"
                  :input="filters.layout"
                ></filter-select>
              </v-flex>
              <v-flex class="mb-4" xs3 sm2 md1>
                <filter-input
                  class="ma-2"
                  :input="filters.capacity"
                ></filter-input>
              </v-flex>
            </v-layout>
            <v-btn class="btn btn-large bg-blue mt-3" dark round @click="findVenue">FIND VENUE</v-btn>
          </div>
        </div>
      </v-flex>
    </v-container>
    <div class="overlay"></div>
  </div>
</template>

<script>
  import StageList from '../components/StageList'
  import bgImage from '../assets/event-details-bg.jpg'
  import FilterSelect from '../components/FormComponents/FilterSelect'
  import SelectDate from '../components/FormComponents/SelectDate'
  import FilterInput from '../components/FormComponents/FilterInput'

  export default {
    name: 'event-details',

    data() {
      return {
        bgImage,
        caption: 'Tailored Solutions for Your Event',
      }
    },

    computed: {
      filters() {
        return this.$store.getters.filters
      },
      notBeforeStart() {
        return new Date().getTime();
      },
      notBeforeEnd() {
        const CurrentTime = new Date();
        return CurrentTime.setMinutes(CurrentTime.getMinutes() + 30);
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
      FilterInput,
      FilterSelect
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }

  .event-details {
    position: relative;

    &__filters {
      height: 100%;
      padding: 20px;
      background: {
        repeat: no-repeat;
        size: 100% auto;
        position: center;
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
      background-color: rgba(0, 0, 0, .5);
    }
  }
</style>