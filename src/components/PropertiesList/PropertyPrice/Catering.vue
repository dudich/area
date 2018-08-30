<template>
  <tr class="catering">
    <td class="text">
      Catering
      <v-btn
        class="btn bg-blue no-text-transform"
        @click="changeCatering"
        dark
        round
      >
        {{ catering ? 'Remove' : 'Add' }}
      </v-btn>
    </td>
    <td class="count">{{ catering ? 'Added' : '-' }}</td>
  </tr>
</template>

<script>
  import {CHANGE_CATERING} from "../../../store/actionTypes";

  export default {
    name: 'catering',

    props: {
      catering: {
        type: Boolean,
        required: true
      },
      propertyId: {
        type: String,
        required: true
      }
    },

    methods: {
      changeCatering() {
        this.$store.commit(CHANGE_CATERING, this.propertyId);
        EventBus.$emit(`CHANGE_CATERING_${this.propertyId}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catering {

    td {
      padding: 5px 10px;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }

    .text {
      position: relative;
      text-align: right;

      .btn {
        position: absolute;
        top: -7px;
        right: 100px;
      }
    }

    .count {
      text-align: right;
    }
  }
</style>