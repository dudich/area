<template>
  <v-layout class="property-gallery" row wrap>
    <v-flex xs7 sm12>
      <img class="big-img" :src="images[0].big" alt="img" @click="openGalleryCarousel">
    </v-flex>
    <v-flex xs5 sm12>
      <v-layout class="thumb-img-container" row>
        <img class="thumb-img"
             v-for="(item, i) in thumbArr.slice(0, 4)"
             :key="i"
             :src="item"
             alt="img"
        >
        <v-btn
          class="btn no-text-transform bg-light-green hidden-sm-and-up"
          @click="showDetails"
          dark
          round
        >{{ details ? 'Hide Details' : 'Vue Details' }}</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import {OPEN_GALLERY_CAROUSEL} from "../../../store/actionTypes";

  export default {
    name: 'property-gallery',

    props: {
      propertyId: {
        type: String,
        required: true
      },
      images: {
        type: Array,
        required: true
      },
      propertyName: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        capacity: '',
        details: false
      }
    },

    computed: {
      thumbArr() {
        return this.images.map((item) => item.thumb)
      }
    },

    mounted() {
      EventBus.$on(`CHANGE_LAYOUT_TYPE_${this.propertyId}`, (payload) => this.capacity = payload)
    },

    methods: {
      openGalleryCarousel() {
        EventBus.$emit(OPEN_GALLERY_CAROUSEL, {images: this.images, caption: this.propertyName})
      },

      showDetails() {
        EventBus.$emit(`SHOW_DETAILS_${this.propertyId}`);
        this.details = !this.details;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../styles/variables";

  .property {

    &-gallery {
      overflow: hidden;

      .big-img {
        width: 100%;
        cursor: pointer;

        @media screen and (max-width: $xs - 1) {
          height: 100%;
        }
      }

      .thumb-img {
        width: 80px;
        height: 80px;
        margin-right: 6px;

        @media screen and (max-width: $sm - 1) {
          width: 32%;
        }

        @media screen and (max-width: $xs - 1) {
          width: 46%;
          height: 20%;
          margin: 0 0 6% 4%;
        }

        &-container {
          @media screen and (max-width: $xs - 1) {
            flex-wrap: wrap;
            justify-content: space-around;
          }
        }
      }
    }
  }
</style>