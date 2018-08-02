<template>
  <v-container fluid>
    <section class="home-banner" :style="{ backgroundImage: `url(${urlImage})`}">
      <v-btn absolute to="/event-details" color="white" round>Book now</v-btn>
    </section>
  </v-container>
</template>

<script>
  export default {
    name: 'home',

    data() {
      return {
        urlImage: 'http://www.areaevents.co.nz/wp-content/themes/areaevents/uploads/IMG_8198.jpg'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    &-banner {
      position: relative;
      height: 800px;
      background: {
        repeat: no-repeat;
        size: cover;
      };

      .v-btn {
        top: 60px;
        right: 60px;
      }
    }
  }
</style>