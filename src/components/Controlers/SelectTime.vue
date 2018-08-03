<template>
  <v-select
    class="select-control"
    :items="items"
    label="Select Event"
    outline
    append-icon="$vuetify.icons.dropdown"
  ></v-select>
</template>

<script>
  export default {
    data: () => ({
      items: ['7:00am-10am', '8:00am-11am', '9:00am-12am', '10:00am-1:00pm']
    })
  }
</script>

<style lang="scss">
  .select-control {
    .v-input__slot {
      border-color: rgba(255, 255, 255, .8)!important;
    }

    .v-select__selection {
      color: #fff;
    }

    .v-label {
      color: #fff;
    }

    .v-icon {
      color: #fff;
    }
  }
</style>