<template>
  <v-container>
    <div class="select-package">
      <stage-list></stage-list>
      <v-layout class="pt-5" row wrap>
        <v-flex xs12 sm6 md2>
          <select-event class="pa-2"></select-event>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <select-date class="pa-2"></select-date>
        </v-flex>
        <v-flex xs3 sm2 md1>
          <input-capacity class="ma-2"></input-capacity>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <select-time class="pa-2"></select-time>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <select-layout class="pa-2"></select-layout>
        </v-flex>
      </v-layout>
      <properties-list :properties="properties" :extras="extras"></properties-list>
    </div>
  </v-container>
</template>

<script>
  import StageList from '../components/StageList'
  import PropertiesList from '../components/PropertiesList'
  import SelectEvent from '../components/Controlers/SelectEvent'
  import SelectDate from '../components/Controlers/SelectDate'
  import InputCapacity from '../components/Controlers/InputCapacity'
  import SelectTime from '../components/Controlers/SelectTime'
  import SelectLayout from '../components/Controlers/SelectLayout'


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
      SelectEvent,
      SelectDate,
      InputCapacity,
      SelectTime,
      SelectLayout
    }
  }
</script>

<style lang="scss" scoped>
  .select-package {
    .layout {
      border: 1px solid #fff;
    }
  }
</style>