<template>
  <div class="summary">
    <h4 class="summary-caption">Summary</h4>
    <v-container>
      <v-layout row wrap>
        <v-flex class="px-4" xs12 sm4>
          <property-info :propertyName="property.name"></property-info>
        </v-flex>
        <v-flex class="px-5" xs12 sm4 offset-xs0 offset-sm4>
          <summary-table :price="property.price" :extras="property.extrasPrice"></summary-table>
          <v-btn class="btn-view-extras"  v-show="visibleBtn" dark round large @click="confirmHold">Hold</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {
    OPEN_CONFIRMATION_MODAL,
    CLOSE_CONFIRMATION_MODAL
  } from "../../store/actionTypes";
  import PropertyInfo from './PropertyInfo'
  import SummaryTable from './SummaryTable'

  export default {
    name: 'property-summary',

    props: {
      property: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        visibleBtn: true
      }
    },

    mounted() {
      EventBus.$on(CLOSE_CONFIRMATION_MODAL, () => this.visibleBtn = false);
    },

    methods: {
      confirmHold() {
        EventBus.$emit(OPEN_CONFIRMATION_MODAL);
        setTimeout(() => EventBus.$emit(CLOSE_CONFIRMATION_MODAL), 3000)
      }
    },

    components: {
      PropertyInfo,
      SummaryTable
    }
  }
</script>

<style lang="scss" scoped>
  .summary {
    background-color: #164755;
    color: #fff;

    &-caption {
      margin: {
        top: 25px;
        bottom: 25px;
      }
      font-size: 20px;
      color: #fff;
    }
  }
</style>