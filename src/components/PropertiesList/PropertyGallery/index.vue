<template>
  <div class="property-gallery">
    <div class="big-img-container">
      <img class="big-img" :src="images[0].big" alt="img" @click="openGalleryCarousel">
      <div class="property-capacity">
        <span class="count" v-text="capacity"></span>
        <div class="icon-container">
          <img src="../../../assets/icons/users-icon.png" alt="users-icon">
        </div>
      </div>
    </div>
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
      capacity: {
        type: Number,
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

    computed: {
      thumbArr() {
        return this.images.map((item) => item.thumb)
      }
    },

    methods: {
      openGalleryCarousel() {
        EventBus.$emit(OPEN_GALLERY_CAROUSEL, {images: this.images, caption: this.propertyName})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .property {

    &-gallery {
      .big-img {
        width: 100%;
        cursor: pointer;

        &-container {
          position: relative;
        }
      }

      .thumb-img {
        margin-right: 6px;

        &-container {
          display: flex;
          justify-content: flex-start;
        }
      }
    }

    &-capacity {
      position: absolute;
      right: 10px;
      bottom: 10px;

      .count {
        display: block;
        margin-bottom: -5px;
        font-size: 20px;
        line-height: 18px;
        font-weight: 700;
        color: #000;
      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;

        img {
          width: 80%;
          height: 80%;
        }
      }
    }
  }
</style>