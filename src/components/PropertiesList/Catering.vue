<template>
  <div class="catering">
    <div class="catering-checkbox">
      <i class="fas fa-check"
         :style="{ color: property.catering ? 'green' : 'transparent' }"
      >
      </i>
    </div>
    <button class="btn" type="button" @click="property.catering = !property.catering">Catering</button>
    <div class="notification" :style="{ opacity: property.catering ? '1' : '0' }">
      Catering Added! We will contact you and details your booking is confirmed.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'catering',

    props: {
      property: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catering {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;

    &-checkbox {
      display: inline-block;
      margin-right: 10px;
      width: 35px;
      height: 25px;
      border-radius: 4px;
      background-color: white;

      .fas {
        font-size: 20px;
        line-height: 25px;
        transition: .5s;
      }
    }

    .notification {
      position: absolute;
      top: 40px;
      right: 0;
      width: 250px;
      padding: 10px;
      border: 2px solid orange;
      border-radius: 10px;
      background-color: white;
      text-align: left;
      z-index: 100;
      transition: .5s;
    }
  }
</style>