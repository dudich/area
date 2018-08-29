<template>
  <div class="summary bg-dark-blue">
    <h4 class="summary-caption" v-text="summaryCaption"></h4>
    <v-container>
      <v-layout class="px-5" row wrap>
        <v-flex xs12 sm5 md6>
          <property-info :propertyName="property.name"></property-info>
          <payment-info
            v-show="visible"
            v-if="$route.path === `/book/${ $route.params.id }`"
          ></payment-info>
        </v-flex>
        <v-flex xs12 sm7 md6>
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
            <p class="book-error-message text-notification font-weight-bold" v-if="false">
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
  import { CLOSE_CONFIRMATION_MODAL } from "../../store/actionTypes";
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

    .layout.px-5 {
      @media screen and (max-width: 400px) {
        padding: {
          left: 8px !important;
          right: 8px !important;
        };
      }
    }

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