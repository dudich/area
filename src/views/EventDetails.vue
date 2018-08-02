<template>
  <v-container>
    <div class="event-details" :style="{ backgroundImage: `url(${bgImage})` }">
      <h2 class="event-details__caption" v-html="caption"></h2>
      <stage-list></stage-list>
      <event-list></event-list>
    </div>
  </v-container>
</template>

<script>
  import StageList from '../components/StageList'
  import EventList from '../components/EventList'
  import bgImage from '../assets/event-details-bg.png'

  export default {
    name: 'event-details',

    data() {
      return {
        bgImage,
        caption: 'Tailored Solutions for Your Event'
      }
    },

    components: {
      StageList,
      EventList
    }
  }
</script>

<style lang="scss" scoped>
  .event-details {
    padding: 20px;
    background: {
      repeat: no-repeat;
      size: cover;
    }

    &__caption {
      margin: {
        bottom: 30px;
      }
      font-size: 40px;
      line-height: 55px;
      font-weight: 700;
      color: white;
    }
  }
</style>