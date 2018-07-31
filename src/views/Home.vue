<template>
  <div class="select package">
    <stage-list></stage-list>
    <properties-list :properties="properties"></properties-list>
    <extras-list :extras="extras"></extras-list>
  </div>
</template>

<script>
  import StageList from '../components/StageList'
  import SelectControls from '../components/SelectControls'
  import PropertiesList from '../components/PropertiesList'
  import ExtrasList from '../components/ExtrasList'

  export default {
    name: 'home',

    computed: {
      properties() {
        return this.$store.getters.properties;
      },
      extras() {
        return this.$store.getters.extras;
      }
    },

    components: {
      ExtrasList,
      StageList,
      PropertiesList,
      SelectControls
    }
  }
</script>