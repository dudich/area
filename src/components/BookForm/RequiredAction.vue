<template>
  <div class="required-action">
    <p class="required-action__caption" v-text="caption"></p>
    <div class="label-container mr-1">
      <label
        :class="{ active:  selected === 'yes'}"
        @click="showNotification"
      >
        <input type="radio" value="yes" v-model="selected">
        Yes
      </label>
    </div>
    <div class="label-container">
      <label
        :class="{ active:  selected === 'no'}"
        @click="hideNotification"
      >
        <input type="radio" value="no" v-model="selected">
        No
      </label>
    </div>
    <p
      class="required-action__notification text-notification font-weight-bold"
      v-if="selected === 'yes'"
      :class="{ opacity: disappearNotification &&  selected === 'yes' }"
    >
      We will contact you shortly
    </p>
  </div>
</template>

<script>
  import {SELECT_REQUIRED_ACTION} from "../../store/actionTypes";

  export default {
    name: 'required-action',

    props: {
      caption: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        selected: '',
        disappearNotification: false
      }
    },

    methods: {
      showNotification() {
        setTimeout(() => this.disappearNotification = true, 2000);
        setTimeout(() => this.$emit(SELECT_REQUIRED_ACTION, this.selected), 100);
      },

      hideNotification() {
        this.disappearNotification = false;
        setTimeout(() => this.$emit(SELECT_REQUIRED_ACTION, this.selected), 100);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";

  .required-action {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 23px;

    &__caption {
      line-height: 16px;
      color: $grey;
    }

    &__notification {
      position: absolute;
      bottom: 0;
      width: 100%;
      margin-bottom: 0;
      font-size: 11px;
    }

    .label-container {
      display: inline-block;
      margin-bottom: 10px;
    }

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 35px;
      border: 1px solid #000;
      color: #000;
      background-color: $light-gray;
      &:hover {
        border: 2px solid $blue;
        cursor: pointer;
      }

      input {
        display: none;
      }

      &.active {
        border: 2px solid $blue;
      }
    }

    @media screen and (min-width: 401px) {
      max-width: 145px;
    }
  }
</style>