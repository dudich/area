<template>
  <div class="extras">
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
    <extras-table :extras="extras" :checked="checked"></extras-table>
  </div>
</template>

<script>
  import ExtrasTable from './ExtrasTable'
  import ExtrasItem from './ExtrasItem'

  export default {
    props: {
      extras: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        selected: null,
        checked: []
      }
    },

    computed: {
      description() {
        const index = this.extras.map((item) => item.id).indexOf(this.selected);
        return this.extras[index].description;
      }
    },

    methods: {
      updateSelected(id) {
        this.selected = id;
      },
      updateChecked(id) {
        const index = this.checked.indexOf(id);
        if( index === -1) {
          this.checked.push(id);
        } else {
            this.checked.splice(index, 1);
        }
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0 5px;
    background-color: #1b4350;

    &-list {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      max-width: 81%;
      margin: 0 auto;
    }

    &-description {
      color: white;
      text-align: center;
    }
  }
</style>