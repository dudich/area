<template>
  <v-text-field
    class="input-capacity"
    v-model="capacity"
    :rules="capacityRules"
    label="Count"
    required
  ></v-text-field>
</template>

<script>
  export default {
    name: 'input-capacity',

    data: () => ({
      valid: false,
      capacity: '20',
      capacityRules: [
        v => !!v || 'Capacity is required'
      ]
    })
  }
</script>

<style lang="scss">
  .event-details {
    .input-capacity {
      height: 60px;
      margin-top: 0;
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 4px;

      .v-input__slot {
        padding: 0 12px;
        &::before,
        &::after {
          content: none;
        }

        input {
          margin-top: 20px;
          color: #fff;
        }

        .v-label {
          top: 18px;
          &.v-label--active {
            top: 25px;
          }
        }

        .v-label,
        .v-label.label--active {
          color: #fff !important;
        }
      }

      .v-text-field__details {
        position: absolute;
        top: 65px;
        text-align: center;
      }
    }
  }
</style>