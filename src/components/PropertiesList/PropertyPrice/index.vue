<template>
  <table class="price text-xs-right">
    <tr class="price-property">
      <td class="text">Room Hire Cost</td>
      <td class="count">${{ property.price }}</td>
    </tr>
    <extra-price
      :price="property.extrasPrice"
      :propertyId="property.id"
    ></extra-price>
    <price-notification
      :class="{ opacity: disappear }"
      v-if="extraAddNotification"
    >
      You add extras, total price updated
    </price-notification>
    <catering
      :catering="property.catering"
      :propertyId="property.id"
    ></catering>
    <price-notification
      :class="{ opacity: disappear }"
      v-if="cateringNotification"
    >
      We will contact you to discuss details about catering options
    </price-notification>
    <tr class="price-total">
      <td class="text text-green">Total</td>
      <td class="count text-green">${{ totalPrice(property) }}</td>
    </tr>
  </table>
</template>

<script>
  import Catering from './Catering'
  import ExtraPrice from './ExtraPrice'
  import PriceNotification from './PriceNotification'

  export default {
    name: 'PropertyPrice',

    props: {
      property: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        cateringNotification: false,
        extraAddNotification: false,
        disappear: false
      }
    },

    mounted() {
      EventBus.$on(`UPDATE_EXTRA_PRICE_${this.property.id}`, () => {
        this.disappear = false;
        this.extraAddNotification = true;
        setTimeout(() => this.disappear = true, 2000);
        setTimeout(() => this.extraAddNotification = false, 3000);
      });
      /*EventBus.$on(`CHANGE_CATERING_${this.property.id}`, () => {
        if(this.property.catering) {
          this.disappear = false;
          this.cateringNotification = true;
          setTimeout(() => this.disappear = true, 2000);
          setTimeout(() => this.cateringNotification = false, 3000);
        }
      });*/
    },

    methods: {
      totalPrice(property) {
        return (property.price + property.extrasPrice).toFixed(2)
      }
    },

    components: {
      Catering,
      ExtraPrice,
      PriceNotification
    }
  }
</script>

<style lang="scss" scoped>
  .price {
    width: 100%;

    td {
      padding: 5px 10px;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
  }
</style>