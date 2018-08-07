<template>
      <v-card class="extras-card">
        <extras-header :total="total"></extras-header>
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
</template>

<script>
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
        checked: []
      }
    },

    computed: {
      description() {
        const index = this.findIndexByKey(this.extras, 'id', this.selected);
        return this.extras[index].description;
      },
      total() {
        const arrOfChecked = this.extras.filter((item) => this.checked.indexOf(item.id) !== -1);
        const arrOfCost = arrOfChecked.map((item) => item.price * item.quantity);
        const result = arrOfCost.reduce((acc, item) => acc + item, 0);

        return +result.toFixed(2);
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
      closeModal() {
        this.$store.commit('CHANGE_EXTRAS_PRICE', { total: this.total, id: this.propertyId });
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
      color: white;
      text-align: center;
    }
  }

  .extras-card {
    background-color: #184556!important;
  }
</style>