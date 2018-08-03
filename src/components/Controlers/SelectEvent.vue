<template>
  <v-select
    class="select-control"
    v-model="select"
    :items="items"
    label="Select Event"
    outline
    append-icon="$vuetify.icons.dropdown"
  ></v-select>
</template>

<script>
  export default {
    data: () => ({
      select: 'Meeting',
      items: [
        'Breakfast/Lunch/Dinner',
        'Cocktail',
        'Conference',
        'Corporate Function',
        'Exhibition',
        'Group Accommodation',
        'Meeting',
        'Party',
        'Wedding',
        'Xmas'
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