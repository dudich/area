<template>
  <v-dialog v-model="dialog" width="1190" content-class="extras" :scrollable=true>
    <v-card class="extras-card bg-dark-blue hidden-md-and-down">
      <extras-header :total="total" :propertyId="propertyId" :addExtras="addExtras"></extras-header>
      <p class="extras-description" :class="{opacity: !selected}">{{ selected ? description : 'default' }}</p>
      <ul class="extras-list">
        <extras-item
          v-for="extra in filteredExtras"
          :key="extra.id"
          :extra="extra"
          :selected="selected"
          @EXTRA_SELECTED="updateSelected"
          @INCREASE_EXTRA_QUANTITY="increaseExtraQuantity"
          @DECREASE_EXTRA_QUANTITY="decreaseExtraQuantity"
        >
        </extras-item>
      </ul>
      <extras-table :extras="filteredExtras"></extras-table>
    </v-card>

    <v-card class="extras-card bg-dark-blue hidden-lg-and-up">
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
        capacity: null,
        selected: '',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>'

      }
    },

    mounted() {
      EventBus.$on(SHOW_EXTRAS, (payload) => {
        _.forEach(this.extras, (item) => item.quantity = 0);
        this.propertyId = payload.id;
        this.capacity = payload.capacity;
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
      chunkExtras() {
        return _.chunk(this.filteredExtras, 3);
      },
      filteredExtras() {
        return this.extras.filter(extra => !(extra.name === 'Tea and Nespresso Coffee' && this.capacity > 50));
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
      increaseExtraQuantity(id) {
        const index = this.extras.map((item) => item.id).indexOf(id);
        ++this.extras[index].quantity;
      },
      decreaseExtraQuantity(id) {
        const index = this.extras.map((item) => item.id).indexOf(id);
        --this.extras[index].quantity;
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

    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;
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
    align-items: flex-end;
  }

  .v-carousel-nav {
    position: absolute;
    top: 65%;
    color: #fff;
    font-size: 20px;

    &.prev {
      left: 15px;
    }

    &.next {
      right: 15px;
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