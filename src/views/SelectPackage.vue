<template>
  <v-container>
    <stage-list></stage-list>
    <properties-list :properties="properties" :extras="extras"></properties-list>
  </v-container>
</template>

<script>
  import StageList from '../components/StageList'
  import SelectControls from '../components/SelectControls'
  import PropertiesList from '../components/PropertiesList'

  export default {
    name: 'select-package',

    computed: {
      properties() {
        return this.$store.getters.properties;
      },
      extras() {
        return this.$store.getters.extras;
      }
    },

    components: {
      StageList,
      PropertiesList,
      SelectControls
    }
  }
</script>