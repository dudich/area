<template>
  <v-carousel>
    <v-carousel-item :key="i" v-for="i in Math.ceil(items.length / 4)">
      <v-layout row>
        <v-flex xs3 :key="j" v-for="(item, j) in items">
          <img :src="item.src" alt="">
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'icons/event-types/event-type-icon-1.png'
          },
          {
            src: 'icons/event-types/event-type-icon-1.png'
          },
          {
            src: 'icons/event-types/event-type-icon-1.png'
          },
          {
            src: 'icons/event-types/event-type-icon-1.png'
          },
          {
            src: 'icons/event-types/event-type-icon-1.png'
          }
        ]
      }
    }
  }
</script>