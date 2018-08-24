<template>
  <div class="corp-sign-out" @click="signOut">
    <span class="corp-sign-out__name mr-4 font-weight-bold" v-text="userName"></span>
    <div class="corp-sign-out__link">
      <a class="v-list__tile v-list__tile--link">
        Sign-Out
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sign-out-link',

    props: {
      signOut: {
        type: Function,
        required: true
      },
      userName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .corp-sign-out {

    &__name {
      font-size: 16px;
    }

    &__link {
      display: inline-block;
      border: 1px solid #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
</style>