<template>
  <div class="property-list">
    <property
      v-for="property in properties"
      :key="property.id"
      :property="property"
      :extras="extras"
    ></property>
  </div>
</template>

<script>
  import Property from './Property'

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
      Property
    }
  }
</script>