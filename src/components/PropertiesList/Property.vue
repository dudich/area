<template>
  <div class="property">
    <property-notification
      :propertyId="property.id"
      :catering="property.catering"
    ></property-notification>
    <v-layout class="px-3 py-2" row wrap justify-space-between>
      <v-flex xs12 sm5 md7 lg7>
        <p class="property-name">{{ property.name }}</p>

        <v-layout row wrap>
          <v-flex class="mb-3" xs12 md6>
            <property-gallery
              :images="property.images"
              :propertyName="property.name"
              :propertyId="property.id"
            ></property-gallery>
          </v-flex>

          <v-flex class="mb-3 pl-3 hidden-xs-only" sm12 md6>
            <property-description :property="property"></property-description>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-slide-y-transition>
        <v-flex v-if="details" xs12>
          <div class="hidden-sm-and-up">
            <property-layouts
              :layouts="property.layoutTypes"
              :area="property.floorArea"
              :propertyId="property.id"
              :select="'theatre'"
            ></property-layouts>
          </div>
          <div class="hidden-sm-and-up">
            <property-description class="hidden-sm-and-up" :property="property"></property-description>
            <property-price :property="property"></property-price>
            <div class="btn-container">
              <add-extra-button
                class="hidden-sm-and-up"
                :catering="property.catering"
                :id="property.id"
                :text="['Add Catering', 'Remove Catering']"
              ></add-extra-button>
              <v-btn
                class="btn btn-view-extras no-text-transform bg-blue no-text-transform btn-large mb-2"
                dark
                round
                @click="showExtras()"
              >View Extras
              </v-btn>
              <v-btn
                class="btn btn-hold no-text-transform bg-blue no-text-transform btn-large mb-2"
                dark
                round
                @click="holdProperty()"
              >Hold
              </v-btn>
              <v-btn
                class="btn btn-book no-text-transform bg-light-green no-text-transform btn-large mb-2"
                dark
                round
                @click="bookProperty()"
              >Book + Confirm
              </v-btn>
            </div>
          </div>
        </v-flex>
      </v-slide-y-transition>

      <v-flex class="hidden-xs-only" xs12 sm6 md4 lg3>
        <property-description class="hidden-sm-and-up" :property="property"></property-description>
        <property-price :property="property"></property-price>
        <div class="btn-container">
          <add-extra-button
            class="hidden-sm-and-up"
            :catering="property.catering"
            :id="property.id"
            :text="['Add Catering', 'Remove Catering']"
          ></add-extra-button>
          <v-btn
            class="btn btn-view-extras no-text-transform bg-blue no-text-transform btn-large mb-2"
            dark
            round
            @click="showExtras(property.id)"
          >View Extras
          </v-btn>
          <v-btn
            class="btn btn-hold no-text-transform bg-blue no-text-transform btn-large mb-2"
            dark
            round
            @click="holdProperty(property.id)"
          >Hold
          </v-btn>
          <v-btn
            class="btn btn-book no-text-transform bg-light-green no-text-transform btn-large no-pre-line mb-2"
            dark
            round
            @click="bookProperty(property.id)"
          >Book + Confirm
          </v-btn>
        </div>
      </v-flex>

      <v-flex class="hidden-xs-only" sm12>
        <property-layouts
          :layouts="property.layoutTypes"
          :area="property.floorArea"
          :propertyId="property.id"
          :select="'theatre'"
        ></property-layouts>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import {SHOW_EXTRAS} from "../../store/actionTypes";
  import PropertyDescription from './PropertyDescription'
  import PropertyGallery from './PropertyGallery/index'
  import PropertyLayouts from './PropertyLayouts'
  import PropertyPrice from './PropertyPrice/index'
  import PropertyNotification from './PropertyNotification'
  import AddExtraButton from '../Buttons/AddCateringButton'

  export default {
    name: 'property',

    props: {
      property: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        details: false,
        capacity: null
      }
    },

    mounted() {
      EventBus.$on(`SHOW_DETAILS_${this.property.id}`, () => this.details = !this.details);
      EventBus.$on(`CHANGE_LAYOUT_TYPE_${this.property.id}`, (payload) => this.capacity = payload);
    },

    methods: {
      showExtras() {
        EventBus.$emit(SHOW_EXTRAS, {
          id: this.property.id,
          capacity: this.capacity,
          name: this.property.name
        });
      },
      holdProperty() {
        this.$router.push(`/hold/${this.property.id}`);
      },
      bookProperty() {
        this.$router.push(`/book/${this.property.id}`);
      }
    },

    components: {
      PropertyGallery,
      PropertyDescription,
      PropertyLayouts,
      PropertyPrice,
      PropertyNotification,
      AddExtraButton
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";

  .property {
    position: relative;
    border: 1px solid #fff;

    &:last-child {
      margin-bottom: 30px;
    }

    &-name {
      margin: {
        bottom: 5px;
        left: 5px;
      }
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
      text-align: left;
      text-transform: capitalize;
      color: white;
    }

    .btn-container {
      width: 60%;
      margin-left: auto;

      .v-btn {
        width: 100%;

        @media screen and (max-width: $xs - 1) {
          width: 30px;
          height: 80px !important;
          border-radius: 50%;
        }
      }

      @media screen and (max-width: $xs - 1) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: auto;
      }
    }
  }
</style>