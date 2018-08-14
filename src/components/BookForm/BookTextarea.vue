<template>
  <div class="hold-input hold-textarea">
    <v-textarea
      class="hold-input"
      :placeholder="placeholder"
      solo
    ></v-textarea>
  </div>
</template>

<script>
  export default {
    name: 'book-textarea',

    props: {
      placeholder: {
        type: String,
        required: true
      }
    }
  }
</script>