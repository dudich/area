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
        width: 80px;
        height: 80px;
        margin-right: 6px;

        &-container {
          display: flex;
          justify-content: flex-start;
        }
      }
    }

    &-capacity {
      position: absolute;
      right: 15px;
      bottom: 15px;

      .count {
        display: block;
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 18px;
        font-weight: 700;
        color: #fff;
      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 12px;
        background-color: #fff;

        img {
          width: 80%;
          height: 80%;
        }
      }
    }
  }
</style>