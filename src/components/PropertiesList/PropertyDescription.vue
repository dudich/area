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
          :class="{ active: selected === type.id }"
      >
        <label>
          <input type="radio" :value="type.id" v-model="selected">
          <img :src="`icons/arrangements/arrangement-icon-${ type.id }.png`" alt="arrangement-icon">
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
      max-width: 380px;
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
      height: 90px;
      border: 3px solid black;
      border-radius: 10px;
      background-color: white;
      transition: .5s;
      &:hover,
      &.active {
        border-color: #7FBE42;
      }

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;

        input {
          display: none;
        }

        img {
          width: 80%;
          height: 80%;
        }
      }
    }
  }
</style>