<template>
  <ul class="property-list">
    <li class="property" v-for="property in properties" :key="property.id">
      <v-layout class="px-3 py-2">
        <div class="left-side">
          <p class="property-name">{{ property.name }}</p>
          <v-layout row wrap>
            <v-flex class="mb-3" xs12 md5>
              <property-gallery
                :propertyId="property.id"
                :capacity="property.capacity"
                :images="property.images"
                :propertyName="property.name"
              ></property-gallery>
            </v-flex>
            <v-flex class="mb-3 pl-3" xs12 md7>
              <property-description :property="property"></property-description>
            </v-flex>
            <v-flex class="mb-3" xs12>
              <property-layouts></property-layouts>
            </v-flex>
          </v-layout>
        </div>
        <div class="right-side text-xs-right">
          <property-price :property="property"></property-price>
          <div class="btn-container">
            <v-btn
              class="btn btn-view-extras no-text-transform bg-blue no-text-transform btn-large"
              dark
              round
              block
              @click="showExtras(property.id)"
            >View Extras
            </v-btn>
            <v-btn
              class="btn btn-hold no-text-transform bg-blue no-text-transform btn-large"
              dark
              round
              block
              @click="holdProperty(property.id)"
            >Hold
            </v-btn>
            <v-btn
              class="btn btn-book no-text-transform bg-light-green no-text-transform btn-large"
              dark
              block
              round
            >Book and confirm
            </v-btn>
          </div>
        </div>
      </v-layout>

      <extras-list :extras="extras" :propertyId="property.id"></extras-list>
    </li>
  </ul>
</template>

<script>
  import {SHOW_EXTRAS} from "../../store/actionTypes";
  import PropertyDescription from './PropertyDescription'
  import PropertyGallery from './PropertyGallery/index'
  import PropertyLayouts from './PropertyLayouts'
  import PropertyPrice from './PropertyPrice/index'
  import ExtrasList from '../ExtrasList'

  export default {
    name: 'properties-list',

    props: {
      properties: {
        type: Array,
        required: true
      },
      extras: {
        type: Array,
        required: true
      }
    },

    components: {
      PropertyGallery,
      PropertyDescription,
      PropertyLayouts,
      PropertyPrice,
      ExtrasList
    },

    methods: {
      showExtras(id) {
        EventBus.$emit(SHOW_EXTRAS, id);
      },
      holdProperty(id) {
        this.$router.push(`/hold/${id}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .property {
    border: 1px solid #fff;

    &-name {
      margin: {
        bottom: 5px;
        left: 5px;
      }
      font-size: 18px;
      line-height: 20px;
      font-weight: 700;
      text-align: left;
      text-transform: capitalize;
      color: white;
    }
  }
</style>