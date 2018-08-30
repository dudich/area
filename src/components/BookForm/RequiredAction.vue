<template>
  <div class="required-action">
    <p class="required-action__caption" v-text="caption"></p>

    <v-radio-group v-model="selected" :rules="rules" @change="showNotification">
      <v-radio
        label="Yes"
        value="yes"
        :class="{ active: selected === 'yes' }"
      ></v-radio>
      <v-radio
        label="No"
        value="no"
        :class="{ active: selected === 'no' }"
      ></v-radio>
    </v-radio-group>
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
      },
      rules: {
        type: Array,
        required: false
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
        this.disappearNotification = false;
        this.$emit(SELECT_REQUIRED_ACTION, this.selected);
        setTimeout(() => this.disappearNotification = true, 2000);
      }
    }
  }
</script>

<style lang="scss">
 @import "../../styles/variables";

  .required-action {
    position: relative;
    //padding-bottom: 20px;
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

    .v-input--radio-group__input {
      flex-direction: row;
    }

    .v-radio {

      .v-input--selection-controls__input {
        display: none;
      }

      .v-label {
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
      }

      &.active .v-label {
        border: 2px solid $blue;
      }
    }

    @media screen and (min-width: 401px) {
      max-width: 145px;
    }
  }
</style>