<template>
  <div class="property-gallery">
    <div class="main-img-container">
      <img class="main-img" :src="property.images.main" alt="img">
      <div class="property-capacity">
        <span class="count">{{ property.capacity }}</span>
        <div class="icon-container">
          <img src="icons/users-icon.png" alt="users-icon">
        </div>
      </div>
    </div>
    <div class="other-img-container">
      <img class="other-img"
           :src="other"
           alt="img"
           v-for="other in property.images.others"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'property-gallery',

    props: {
      property: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .property {

    &-gallery {
      .main-img {
        width: 100%;

        &-container {
          position: relative;
        }
      }

      .other-img {
        &-container {
          display: flex;
          justify-content: space-between;
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