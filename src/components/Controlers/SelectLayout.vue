<template>
  <v-select
    class="select-control"
    v-model="select"
    :items="items"
    label="Select Layout"
    outline
    append-icon="$vuetify.icons.dropdown"
  ></v-select>
</template>

<script>
  export default {
    data: () => ({
      select: 'Boardroom 22 people',
      items: [
        'U-shape 21 people',
        'Boardroom 22 people',
        'Classroom 54 people',
        'Banquet 80 people',
        'Theater 100 people',
        'Cocktail 130'
      ]
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