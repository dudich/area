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
          <v-btn class="btn-view-extras" dark round large @click="showExtras(property.id)">View Extras</v-btn>
          <v-btn class="btn-hold" dark round large @click="holdProperty(property.id)">Hold</v-btn>
          <v-btn class="btn-book" dark round large>Book and confirm</v-btn>
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
    background-color: #184556;

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

    .btn {
      &-view-extras,
      &-hold {
        background-color: #29AAE2 !important;
        text-transform: none;
      }

      &-book {
        background-color: #8CC63E !important;
        text-transform: none;
      }
    }
  }
</style>