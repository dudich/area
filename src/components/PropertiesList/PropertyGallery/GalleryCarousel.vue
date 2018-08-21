<template>
  <div class="gallery-carousel" v-if="images.length > 0">
    <h3 class="carousel-caption" v-text="caption"></h3>
      <div class="carousel">
        <div class="carousel-img">
          <img :src="currentImage" alt="">
          <div class="actions">
            <span @click="prevImage" class="prev bg-light-dark ">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span @click="nextImage" class="next bg-light-dark ">
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="thumbnails">
          <div
            v-for="(image, index) in  images"
            :key="image.id"
            :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
            @click="activateImage(index)"
          >
            <img :src="image.thumb">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import {OPEN_GALLERY_CAROUSEL} from "../../../store/actionTypes";

  export default {
    data() {
      return {
        activeImage: 0,
        images: [],
        caption: ''
      }
    },

    computed: {
      currentImage() {
        return this.images[this.activeImage].big;
      }
    },

    mounted() {
      EventBus.$on(OPEN_GALLERY_CAROUSEL, (payload) => {
        this.images = payload.images;
        this.caption = payload.caption;
      })
    },

    methods: {
      nextImage() {
        var active = this.activeImage + 1;
        if (active >= this.images.length) {
          active = 0;
        }
        this.activateImage(active);
      },
      prevImage() {
        var active = this.activeImage - 1;
        if (active < 0) {
          active = this.images.length - 1;
        }
        this.activateImage(active);
      },
      activateImage(imageIndex) {
        this.activeImage = imageIndex;
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";

  .gallery-carousel {
    padding: 20px;
  }

  .carousel-caption {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: white;
  }

  .carousel {
    user-select: none;
    position: relative;
  }

  .thumbnails {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }

  .thumbnail-image {
    flex: 0 0 25%;
    align-items: center;
    cursor: pointer;
    &:not(:last-of-type) {
      padding-right: 6px;
    }
  }

  .thumbnail-image > img {
    width: 100%;
    height: auto;
    transition: all 250ms;
    opacity: 0.6;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0, 0.5);
  }

  .thumbnail-image:hover > img,
  .thumbnail-image.active > img {
    opacity: 1;
    box-shadow: none;
  }

  .carousel-img {
    position: relative;
    margin-bottom: 15px;
  }

  .carousel-img > img {
    display: block;
    width: 100%;
  }

  .actions {
    font-size: 1.5em;
    height: 40px;
    position: absolute;
    top: -34px;
    margin-top: -20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }

  .actions > span {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
      background-color: $light-green!important;
    }
  }

  .actions > span.prev {
    margin-left: 30px;
  }

  .actions > span.next {
    margin-right: 30px;
  }

  .actions > span i {
    line-height: 45px;
  }
</style>