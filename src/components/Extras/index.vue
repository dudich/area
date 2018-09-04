<template>
  <v-dialog v-model="dialog" width="1190" content-class="extras" :scrollable=true>
    <v-card class="extras-card bg-dark-blue">
      <carousel ref="carousel"
                :auto="0"
                :watch-items="chunkExtras"
                :dots="false"
                :prev-html="prevArrow"
                :next-html="nextArrow"
      >
        <carousel-item
          v-for="(stripe, i) in chunkExtras"
          :key="i"
        >
          <extras-item v-for="extra in stripe"
                       :key="extra.id"
                       :extra="extra"
                       :selected="selected"
                       @EXTRA_SELECTED="updateSelected"
                       @INCREASE_EXTRA_QUANTITY="increaseExtraQuantity"
                       @DECREASE_EXTRA_QUANTITY="decreaseExtraQuantity"
          >
          </extras-item>
        </carousel-item>

        <div slot="before">
          <extras-header :total="total" :addExtras="addExtras"></extras-header>
          <p class="extras-description" :class="{ opacity: !selected }">{{ selected ? description : 'default' }}</p>
        </div>
        <div slot="after">
          <extras-table class="hidden-md-and-down" :extras="filteredExtras"></extras-table>
        </div>
      </carousel>
    </v-card>
  </v-dialog>
</template>

<script>
  import {Carousel, CarouselItem} from 'vue-l-carousel'
  import _ from 'lodash'
  import {
    SHOW_EXTRAS,
    HIDE_EXTRAS,
    CHANGE_EXTRAS_PRICE
  } from "../../store/actionTypes";
  import ExtrasHeader from './ExtrasHeader'
  import ExtrasTable from './ExtrasTable'
  import ExtrasItem from './ExtrasItem'
  import findIndexByKey from '../../mixins/findIndexByKey'

  export default {
    props: {
      extras: {
        type: Array,
        required: true
      }
    },

    mixins: [findIndexByKey],

    data() {
      return {
        dialog: false,
        propertyId: '',
        propertyName: '',
        capacity: null,
        selected: '',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        windowWidth: 0

      }
    },

    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },

    mounted() {
      EventBus.$on(SHOW_EXTRAS, (payload) => {
        _.forEach(this.extras, (item) => item.quantity = 0);
        this.propertyId = payload.id;
        this.capacity = payload.capacity;
        this.propertyName = payload.name;
        this.dialog = true;
      });
      EventBus.$on(HIDE_EXTRAS, () => {
        this.dialog = false;
      });
    },

    computed: {
      description() {
        const index = this.findIndexByKey(this.extras, 'id', this.selected);
        return this.extras[index].description;
      },
      total() {
        const arrOfChecked = this.extras.filter((item) => item.quantity > 0);
        const arrOfCost = arrOfChecked.map((item) => item.price * item.quantity);
        return arrOfCost.reduce((acc, item) => acc + item, 0).toFixed(2);
      },
      chunkSize() {
        return this.windowWidth < 1264 ? 3 : 6;
      },
      chunkExtras() {
        return _.chunk(this.filteredExtras, this.chunkSize);
      },
      filteredExtras() {
        return this.extras
          .filter(extra => !(extra.name === 'Tea and Nespresso Coffee' && this.capacity > 50))
          .filter(({ name }) => {
            return (
              (this.propertyName === 'The Zone' || this.propertyName === 'The Domain' ) ?
                name !== 'Projector and Screen' :
                name
            )
          });
      }
    },

    methods: {
      updateSelected(id) {
        return this.selected = id;
      },
      addExtras() {
        this.$store.commit(CHANGE_EXTRAS_PRICE, {total: +this.total, id: this.propertyId});
        EventBus.$emit(`UPDATE_EXTRA_PRICE_${this.propertyId}`);
        EventBus.$emit(HIDE_EXTRAS);
      },
      increaseExtraQuantity(payload) {
        const index = this.extras.map((item) => item.id).indexOf(payload.id);
        payload.name.indexOf('Tea') !== -1 ? this.extras[index].quantity = this.capacity : ++this.extras[index].quantity;
      },
      decreaseExtraQuantity(payload) {
        const index = this.extras.map((item) => item.id).indexOf(payload.id);
        payload.name.indexOf('Tea') !== -1 ? this.extras[index].quantity = 0 : --this.extras[index].quantity;
      },
      handleResize() {
        this.windowWidth = window.innerWidth;
      }
    },

    components: {
      ExtrasTable,
      ExtrasItem,
      ExtrasHeader,
      'carousel': Carousel,
      'carousel-item': CarouselItem

    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .extras {

    &.v-dialog {
      border-radius: 30px;
      border: 3px solid #fff;
    }

    &-description {
      margin-bottom: 40px;
      font-size: 16px;
      color: white;
      text-align: center;

      @media screen and (max-width: $xs - 1) {
        margin-bottom: 20px;
      }
    }
  }

  .v-carousel {
    position: relative;
    height: auto;
  }

  .v-carousel-items {
    display: flex;
    margin-bottom: 40px;
  }

  .v-carousel-item {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    @media screen and (max-width: $md - 1 ) {
      align-items: flex-end;
    }
  }

  .v-carousel-nav {
    position: absolute;
    top: 200px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &.prev {
      left: 5px;
      @media screen and (max-width: $md -1) {
        left: 15px;
      }
    }

    &.next {
      right: 5px;

      @media screen and (max-width: $md -1) {
        right: 15px;
      }
    }

    @media screen and (max-width: $md -1) {
      top: 65%;
    }

    @media screen and (max-width: 654px) {
      top: 67%;
    }

    @media screen and (max-width: $xs - 1) {
      top: 69%;
    }

    @media screen and (max-width: 450px) {
      display: none;
    }
  }
</style>