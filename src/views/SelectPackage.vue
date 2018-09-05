<template>
    <div class="select-package bg-dark-blue">
      <v-container>
        <v-layout row>
          <v-flex xl8 offset-xl2>
            <stage-list :style="{ border: '1px solid white' }"></stage-list>
            <v-layout class="pt-5 select-package__container" row wrap>
              <v-flex class="mb-4" xs12 sm6 md3>
                <select-date
                  class="pa-2"
                  :input="filters.eventStart"
                  :notBefore="notBeforeStart"
                  :id="'eventStart'"
                  ref="pickerStart"
                  @confirm="handle('eventStart')"
                ></select-date>
              </v-flex>
              <v-flex class="mb-4" xs12 sm6 md3>
                <select-date
                  class="pa-2"
                  :input="filters.eventEnd"
                  :notBefore="notBeforeEnd"
                  :id="'eventEnd'"
                  ref="pickerEnd"
                  @confirm="handle('eventEnd')"
                ></select-date>
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
              <v-flex xs7 sm4 md2>
                <loader-button class="mt-3">Get Rooms</loader-button>
              </v-flex>
            </v-layout>
            <properties-list :properties="properties"></properties-list>
            <modal :width="800">
              <gallery-carousel></gallery-carousel>
            </modal>
            <extras :extras="extras"></extras>
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
  import Extras from '../components/Extras'
  import LoaderButton from '../components/Buttons/LoaderButton'


  export default {
    name: 'select-package',

    data() {
      return {
        currentView: null
      }
    },

    computed: {
      properties() {
        return this.$store.getters.properties;
      },
      extras() {
        return this.$store.getters.extras;
      },
      filters() {
        return this.$store.getters.filters
      },
      notBeforeStart() {
        return new Date().getTime();
      },
      notBeforeEnd() {
        const CurrentTime = new Date(this.filters.eventStart.date);
        return CurrentTime.setMinutes(CurrentTime.getMinutes() + 30);
      }
    },

    methods: {
      handle(value) {
        if (value === 'eventStart') {
          this.$refs.pickerEnd.$children[0].$el.children[1].classList.add('display-popup')
        } else {
          this.$refs.pickerEnd.$children[0].$el.children[1].classList.remove('display-popup');
          this.getRange();
        }

      },
      getRange() {
        const parent = this.$refs.pickerEnd.$children[0].$el.children[1];
        const rows = Array.from(parent.querySelector('tbody').children);

        rows.every(row => {
          return Array.from(row.children).every(cell => {

            if (cell.classList.contains('actived')) {
              return false;
            }

            if (!cell.classList.contains('disabled')) {
              cell.classList.add('inrange');
            }

            return true;
          })
        })
      }
    },

    components: {
      StageList,
      PropertiesList,
      FilterSelect,
      SelectDate,
      FilterInput,
      Modal,
      GalleryCarousel,
      Extras,
      LoaderButton
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