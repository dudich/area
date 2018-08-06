<template>
  <div class="input-capacity-container">
    <label class="capacityLabel" for="capacity">Capacity</label>
    <v-text-field
      class="input-capacity"
      v-model="capacity"
      :rules="capacityRules"
      id="capacity"
      required
      @focus="onFocus"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    name: 'input-capacity',

    data: () => ({
      valid: false,
      capacity: '20',
      capacityRules: [
        v => !!v || 'Capacity is required',
        v => v.length < 5 || 'Too much',
      ]
    }),

    methods: {
      onFocus() {
        this.capacity = ''
      }
    }
  }
</script>

<style lang="scss">
  .input-capacity-container {
    position: relative;

    .capacityLabel {
      position: absolute;
      top: -26px;
      left: 5px;
      color: #fff;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
    }
    .input-capacity {
      display: flex;
      align-items: center;
      height: 60px;
      margin-top: 0;
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 4px;

      .v-input__slot {
        padding: 0 12px;
        margin-bottom: 0;
        &::before,
        &::after {
          content: none;
        }

        input {
          color: #fff;
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