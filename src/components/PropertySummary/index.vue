<template>
  <div class="summary bg-dark-blue">
    <h4 class="summary-caption" v-text="summaryCaption"></h4>
    <v-container>
      <v-layout row wrap>
        <v-flex class="px-4" xs12 sm6>
          <property-info :propertyName="property.name"></property-info>
          <payment-info
            v-show="visible"
            v-if="$route.path === `/book/${ $route.params.id }`"
          ></payment-info>
        </v-flex>
        <v-flex class="px-5 text-xs-right" xs12 sm6>
          <summary-table
            class="mb-4"
            :price="property.price"
            :extras="property.extrasPrice"
            :catering="property.catering"
          ></summary-table>
          <v-layout row wrap>
            <v-flex xs6 offset-xs6 v-if="$route.path === `/book/${ $route.params.id }`">
              <v-text-field
                v-show="visible"
                label="Solo"
                placeholder="Enter Promo Code"
                solo
              ></v-text-field>
            </v-flex>
            <v-flex xs6 offset-xs6 v-if="$route.path === `/hold/${ $route.params.id }`">
              <v-btn
                class="btn btn-large no-text-transform bg-blue"
                v-show="visible"
                @click="confirmHold"
                dark
                round
                large
              >Hold
              </v-btn>
            </v-flex>
            <v-flex xs6 offset-xs6 v-if="$route.path === `/book/${ $route.params.id }`">
              <v-btn
                class="btn btn-large no-text-transform bg-light-green"
                v-show="visible"
                @click="confirmBook"
                dark
                round
                large
              >Book and Confirm
              </v-btn>
            </v-flex>
            <p class="book-error-message text-notification font-weight-bold" v-if="error">
              There was an error processing payment.<br>
              Please try again
            </p>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {
    OPEN_CONFIRMATION_MODAL,
    CLOSE_CONFIRMATION_MODAL,
  } from "../../store/actionTypes";
  import PropertyInfo from './PropertyInfo'
  import PaymentInfo from './PaymentInfo'
  import SummaryTable from './SummaryTable'
  import ConfirmDialog from './ConfirmDialog'

  export default {
    name: 'property-summary',

    props: {
      property: {
        type: Object,
        required: true
      },
      currentView: {
        type: Object,
        required: true
      },
      caption: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        visible: true,
        error: false
      }
    },

    computed: {
      summaryCaption() {
        return this.currentView === ConfirmDialog ? `${this.caption} Summary` : 'Summary'
      }
    },

    mounted() {
      EventBus.$on(CLOSE_CONFIRMATION_MODAL, () => this.visible = false);
    },

    methods: {
      confirmHold() {
        EventBus.$emit(OPEN_CONFIRMATION_MODAL);
        setTimeout(() => EventBus.$emit(CLOSE_CONFIRMATION_MODAL), 3000)
      },
      confirmBook() {
        EventBus.$emit(OPEN_CONFIRMATION_MODAL);
      }
    },

    components: {
      PropertyInfo,
      SummaryTable,
      ConfirmDialog,
      PaymentInfo
    }
  }
</script>

<style lang="scss" scoped>
  .summary {
    position: relative;
    padding-bottom: 20px;
    color: #fff;

    &-caption {
      margin: {
        top: 25px;
        bottom: 25px;
      }
      font-size: 20px;
      color: #fff;
    }

    .btn {
      width: 100%;
      margin: 0;
    }

    .book-error-message {
      position: absolute;
      left: 32%;
      bottom: 0;
      font-size: 18px;
      text-align: center;
    }
  }
</style>