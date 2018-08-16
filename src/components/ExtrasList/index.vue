<template>
  <v-slide-y-transition>
    <v-card class="extras-card bg-dark-blue" v-if="showExtras">
      <extras-header :total="total" :propertyId="propertyId" :addExtras="addExtras"></extras-header>
      <ul class="extras-list">
        <extras-item
          v-for="extra in extras"
          :extra="extra"
          :selected="selected"
          :checked="checked"
          @EXTRA_SELECTED="updateSelected"
          @EXTRA_CHECKED="updateChecked"
          @INCREASE_EXTRA_QUANTITY="increaseExtraQuantity"
          @DECREASE_EXTRA_QUANTITY="decreaseExtraQuantity"
        >
        </extras-item>
      </ul>
      <p class="extras-description">{{ selected ? description : '' }}</p>
      <extras-table :extras="extras" :checked="checked"></extras-table>
    </v-card>
  </v-slide-y-transition>
</template>

<script>
  import {SHOW_EXTRAS, HIDE_EXTRAS} from "../../store/actionTypes";
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
        checked: [],
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
        const arrOfChecked = this.extras.filter((item) => this.checked.indexOf(item.id) !== -1);
        const arrOfCost = arrOfChecked.map((item) => item.price * item.quantity);
        return +arrOfCost.reduce((acc, item) => acc + item, 0).toFixed(2);
      }
    },

    methods: {
      updateSelected(id) {
        this.selected = id;
      },
      updateChecked(id) {
        const index = this.checked.indexOf(id);
        if (index === -1) {
          this.checked.push(id);
        } else {
          this.checked.splice(index, 1);
        }
      },
      addExtras() {
        this.$store.commit('CHANGE_EXTRAS_PRICE', {total: this.total, id: this.propertyId});
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
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      max-width: 81%;
      margin: 0 auto !important;
    }

    &-description {
      font-size: 16px;
      color: white;
      text-align: center;
    }
  }
</style>