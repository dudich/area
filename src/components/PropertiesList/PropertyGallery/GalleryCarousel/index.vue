<template>
  <div class="gallery-carousel">
    <carousel-header></carousel-header>
    <carousel-body
      :starting-image="2"
      :images="images"
      :auto-slide-interval="1500"
    ></carousel-body>
  </div>
</template>

<script>
  import {OPEN_GALLERY_CAROUSEL} from "../../../../store/actionTypes";
  import CarouselBody from './CarouselBody'
  import CarouselHeader from './CarouselHeader'

  export default {
    name: 'gallery-carousel',

    props: {
      properties: {
        type: Array,
        required: true
      }
    },

    data: () => ({
      images: this.properties[0].images
    }),

    mounted() {
      EventBus.$on(OPEN_GALLERY_CAROUSEL, (payload) => this.images = this.properties[payload].images)
    },

    components: {
      CarouselBody,
      CarouselHeader
    }
  }
</script>

<style lang="scss" scoped>
  .gallery-carousel {
    padding: 20px;
    background-color: #184556;
  }
</style>