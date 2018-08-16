<template>
  <ul class="property-list">
    <li class="property" v-for="property in properties" :key="property.id">
      <v-layout class="px-3 py-2" row wrap>
        <v-flex xs12 md7>
          <p class="property-name">{{ property.name }}</p>
          <v-layout row wrap>
            <v-flex class="mb-3" xs12 md6>
              <property-gallery
                :images="property.images"
                :propertyName="property.name"
                :propertyId="property.id"
              ></property-gallery>
            </v-flex>
            <v-flex class="mb-3 pl-3" xs12 md6>
              <property-description :property="property"></property-description>
            </v-flex>
            <v-flex xs12>
              <property-layouts
                :layouts="property.layoutTypes"
                :area="property.floorArea"
                :propertyId="property.id"
                :select="'theatre'"
              ></property-layouts>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 md5>
          <v-layout row>
            <v-flex xs12 md8 offset-xs0 offset-md4>
              <property-price :property="property"></property-price>
              <div class="btn-container">
                <v-btn
                  class="btn btn-view-extras no-text-transform bg-blue no-text-transform btn-large mb-2"
                  dark
                  round
                  block
                  @click="showExtras(property.id)"
                >View Extras
                </v-btn>
                <v-btn
                  class="btn btn-hold no-text-transform bg-blue no-text-transform btn-large mb-2"
                  dark
                  round
                  block
                  @click="holdProperty(property.id)"
                >Hold
                </v-btn>
                <v-btn
                  class="btn btn-book no-text-transform bg-light-green no-text-transform btn-large mb-2"
                  dark
                  block
                  round
                  @click="bookProperty(property.id)"
                >Book and confirm
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
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

    data () {
      return {
        type: 'number',
        duration: 300,
        easing: 'easeInOutCubic',
      }
    },

    computed: {
      target () {
        const value = this[this.type];
        if (!isNaN(value)) return Number(value);
        else return value
      },
      options () {
        return {
          duration: this.duration,
          easing: this.easing
        }
      },
      offset() {
        return this.$store.getters.offsetTop
      },
      number() {
        return this.offset + 400
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
        this.$vuetify.goTo(this.target, this.options).then()
      },
      holdProperty(id) {
        this.$router.push(`/hold/${id}`);
      },
      bookProperty(id) {
        this.$router.push(`/book/${id}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .property {
    border: 1px solid #fff;

    &:last-child {
      margin-bottom: 30px;
    }

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

    .btn-container {
      width: 60%;
      margin-left: auto;
    }
  }
</style>