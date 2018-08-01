<template>
  <ul class="property-list">
    <li class="property" v-for="property in properties" :key="property.id">
      <div class="property-container">
        <div class="left-side">
          <p class="property-name">{{ property.name }}</p>
          <div class="flex-container">
            <property-gallery :property="property"></property-gallery>
            <property-description :property="property"></property-description>
          </div>
        </div>
        <div class="right-side">
          <catering :property="property"></catering>
          <property-price :property="property"></property-price>
          <div class="btn-container">
            <v-btn class="btn" color="white" round>Book and Confirm</v-btn>
          </div>
          <div class="btn-container">
            <v-btn class="btn" color="white" round large>Hold</v-btn>
          </div>
        </div>
      </div>

      <extras-list :extras="extras" :propertyId="property.id"></extras-list>
    </li>
  </ul>
</template>

<script>
  import PropertyDescription from './PropertyDescription'
  import PropertyGallery from './PropertyGallery'
  import PropertyPrice from './PropertyPrice'
  import Catering from './Catering'
  import ExtrasList from '../ExtrasList'

  export default {
    name: 'properties-list',

    props: {
      properties: {
        type: Array,
        required: true
      },
      extras: {
        type: Array,
        required: true
      }
    },

    components: {
      PropertyGallery,
      PropertyDescription,
      PropertyPrice,
      Catering,
      ExtrasList
    }
  }
</script>

<style lang="scss" scoped>
  .property {
    margin-bottom: 20px;
    background-color: #00528b;

    &-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 20px 10px;
    }

    .left-side {
      .flex-container {
        display: flex;
        justify-content: space-between;
      }
    }

    &-name {
      margin: {
        bottom: 5px;
        left: 5px;
      }
      text-align: left;
      text-transform: capitalize;
      color: white;
    }

    .btn {
      &-container {
        margin-bottom: 10px;
        text-align: right;
      }
      &-confirm {
        color: white;
        background-color: greenyellow;
      }
      &-hold {
        color: white;
        background-color: blueviolet;
      }
      &-add-extras {
        position: absolute;
        bottom: 0;
        left: 50%;
      }
    }
  }
</style>