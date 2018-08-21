<template>
  <v-slide-y-transition>
    <v-card class="extras-card bg-dark-blue" v-if="showExtras">
      <extras-header :total="total" :propertyId="propertyId" :addExtras="addExtras"></extras-header>
      <p class="extras-description" :class="{opacity: !selected}">{{ selected ? description : 'default' }}</p>
      <ul class="extras-list">
        <extras-item
          v-for="extra in extras"
          :key="extra.id"
          :extra="extra"
          :selected="selected"
          @EXTRA_SELECTED="updateSelected"
          @INCREASE_EXTRA_QUANTITY="increaseExtraQuantity"
          @DECREASE_EXTRA_QUANTITY="decreaseExtraQuantity"
        >
        </extras-item>
      </ul>
      <extras-table :extras="extras"></extras-table>
    </v-card>
  </v-slide-y-transition>
</template>

<script>
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
      },
      propertyId: {
        type: String,
        required: true
      }
    },

    mixins: [findIndexByKey],

    data() {
      return {
        selected: '',
        showExtras: false
      }
    },

    mounted() {
      EventBus.$on(SHOW_EXTRAS, (payload) => {
        if (payload === this.propertyId) {
          this.showExtras = true
        }
      });
      EventBus.$on(HIDE_EXTRAS, (payload) => {
        if (payload === this.propertyId) {
          this.showExtras = false
        }
      })
    },

    computed: {
      description() {
        const index = this.findIndexByKey(this.extras, 'id', this.selected);
        return this.extras[index].description;
      },
      total() {
        const arrOfChecked = this.extras.filter((item) => item.quantity > 0);
        const arrOfCost = arrOfChecked.map((item) => item.price * item.quantity);
        return +arrOfCost.reduce((acc, item) => acc + item, 0).toFixed(2);
      }
    },

    methods: {
      updateSelected(id) {
        this.selected = id;
      },
      addExtras() {
        this.$store.commit(CHANGE_EXTRAS_PRICE, {total: this.total, id: this.propertyId});
        EventBus.$emit(`UPDATE_EXTRA_PRICE_${this.propertyId}`);
      },
      increaseExtraQuantity(id) {
        const index = this.extras.map((item) => item.id).indexOf(id);
        ++this.extras[index].quantity
      },
      decreaseExtraQuantity(id) {
        const index = this.extras.map((item) => item.id).indexOf(id);
        --this.extras[index].quantity;
      }
    },

    components: {
      ExtrasTable,
      ExtrasItem,
      ExtrasHeader
    }
  }
</script>

<style lang="scss">
  .extras {

    &-list {
      position: relative;
      display: flex;
      justify-content: center;
      padding-top: 10px;
      margin: 0 auto !important;
    }

    &-description {
      margin-top: 20px;
      font-size: 16px;
      color: white;
      text-align: center;
    }
  }
</style>