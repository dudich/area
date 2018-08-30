<template>
  <div class="property-gallery">
    <img class="big-img" :src="images[0].big" alt="img" @click="openGalleryCarousel">
    <div class="thumb-img-container">
      <img class="thumb-img"
           v-for="(item, i) in thumbArr.slice(0, 4)"
           :key="i"
           :src="item"
           alt="img"
      >
    </div>
  </div>
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
        capacity: ''
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
      }

      .thumb-img {
        width: 80px;
        height: 80px;
        margin-right: 6px;

        @media screen and (max-width: $sm - 1) {
          width: 32%;
        }

        &-container {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }
</style>