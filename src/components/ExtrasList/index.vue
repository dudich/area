<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="1200" class="extras">
      <v-btn slot="activator" color="white" round>Add Extras</v-btn>
      <v-card color="light-blue darken-4">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="light-blue lighten-3" round @click.native="closeModal">Done</v-btn>
        </v-card-actions>
        <ul class="extras-list">
          <extras-item
            v-for="extra in extras"
            :extra="extra"
            :selected="selected"
            :checked="checked"
            @EXTRA_SELECTED="updateSelected"
            @EXTRA_CHECKED="updateChecked"
          >
          </extras-item>
        </ul>
        <p class="extras-description">{{ selected ? description : '' }}</p>
        <extras-table :extras="extras" :checked="checked" :total="total"></extras-table>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import ExtrasTable from './ExtrasTable'
  import ExtrasItem from './ExtrasItem'

  export default {
    props: {
      extras: {
        type: Array,
        required: true
      },
      propertyId: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        selected: null,
        checked: [],
        dialog: false
      }
    },

    computed: {
      description() {
        const index = this.extras.map((item) => item.id).indexOf(this.selected);
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
        this.dialog = false;
      }
    },

    components: {
      ExtrasTable,
      ExtrasItem
    }
  }
</script>

<style lang="scss" scoped>
  .extras {
    .v-dialog {
      background-color: #1b4350;
    }

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
</style>