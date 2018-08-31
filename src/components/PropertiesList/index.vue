<template>
  <div class="property-list">
    <property
      v-for="property in properties"
      :key="property.id"
      :property="property"
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
      }
    },

    components: {
      Property
    }
  }
</script>