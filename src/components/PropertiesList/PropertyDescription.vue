<template>
  <div class="property-description">
    <p class="text">{{ property.description }}</p>
    <div class="property-features">
      <span class="property-capacity">{{ property.capacity }} people</span>
      <span class="property-type">{{ property.type }}</span>
    </div>
    <ul class="arrangement-list">
      <li class="arrangement-type"
          v-for="type in property.arrangementTypes"
          :class="{ active: selected === type.type }"
      >
        <label>
          <input type="radio" :value="type.type" v-model="selected">
        </label>
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
      max-width: 350px;
      color: aliceblue;

      .text {
        margin: {
          top: 0;
          bottom: 20px;
        };
        text-align: left;
        word-wrap: break-word;
      }
    }

    &-features {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }

  .arrangement {

    &-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    &-type {
      margin: 5px;
      width: 80px;
      height: 80px;
      border: {
        width: 3px;
        style: solid;
        color: white;
      }
      border-radius: 10px;
      background-color: white;
      transition: .5s;
      &:hover,
      &.active {
        border-color: green;
      }

      label {
        display: block;
        height: 100%;
        cursor: pointer;

        input {
          display: none;
        }
      }
    }
  }
</style>