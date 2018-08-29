<template>
  <v-alert
    class="absolute block mt-0 font-weight-bold"
    :value="notification"
    type="success"
    transition="fade-transition"
  >{{ message }}
  </v-alert>
</template>

<script>
  export default {
    name: 'property-notification',

    props: {
      propertyId: {
        type: String,
        required: true
      },
      catering: {
        type: Boolean,
        required: true
      }
    },

    data() {
      return {
        notification: false,
        message: ''
      }
    },

    mounted() {
      EventBus.$on(`CHANGE_CATERING_${this.propertyId}`, () => {
        if(!this.catering) {
          this.notification = true;
          this.message = 'We will contact you to discuss details about catering options';
          setTimeout(() => this.notification = false, 4000);
        }
      });
      EventBus.$on(`UPDATE_EXTRA_PRICE_${this.propertyId}`, () => {
        this.notification = true;
        this.message = 'Extras added';
        setTimeout(() => this.notification = false, 4000);
      });
    },
  }
</script>