<template>
  <div class="property-gallery">
    <div class="main-img-container">
      <div class="property-status">
        <span>{{ property.status }}</span>
      </div>
      <img class="main-img" :src="property.images.main" alt="img">
      <div class="property-capacity">
        <span class="count">{{ property.capacity }}</span>
        <div class="icon-container">
          <i class="fas fa-users"></i>
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
      margin-right: 20px;

      .main-img {
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

    &-status {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px 10px;
      color: lightgreen;
      background-color: white;
      border: 1px solid black;
      font-size: 16px;
      font-weight: 700;
    }

    &-capacity {
      position: absolute;
      right: 10px;
      bottom: 10px;

      .count {
        display: block;
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 700;
        color: white;
      }

      .icon-container {
        width: 40px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid black;
        background-color: white;

        .fas {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
  }
</style>