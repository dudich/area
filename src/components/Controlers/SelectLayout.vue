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
      select: 'Boardroom',
      items: [
        'U-shape',
        'Boardroom',
        'Cabaret',
        'Classroom',
        'Banquet',
        'Theatre',
        'Cocktail'
      ]
    })
  }
</script>