<template>
  <div class="property-description">
    <ul class="property-description__list">
      <li v-for="(description, i) in property.description" :key="i" v-html="description"></li>
      <li class="property-delegate-min" v-if="property.dayDelegateMin !== 0">
        <span>Day Delegate Min.</span>
        <span>- {{ property.dayDelegateMin }} people</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'property-description',

    props: {
      property: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        selected: null
      }
    },

  }
</script>

<style lang="scss" scoped>
  .property {

    &-description {
      color: aliceblue;

      .text {
        margin: {
          top: 0;
          bottom: 20px;
        }
      ;
        text-align: left;
        word-wrap: break-word;
      }

      &__list {
        text-align: left;

        li {
          margin-bottom: 5px;
          text-align: left;
          font-size: 16px;
        }
      }
    }

    &-delegate-min {
      span {
        margin-right: 5px;
      }

      span:first-of-type {
        font-weight: 700;
      }
    }
  }
</style>