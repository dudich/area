<template>
  <tr class="catering">
    <td class="text">
      Catering
      <v-btn class="btn bg-blue no-text-transform" dark round v-if="!catering" @click="addCatering">Add</v-btn>
      <img src="../../../assets/icons/check-icon.png" alt="check-icon" v-if="catering" :class="{ opacity: disappear }">
    </td>
    <td class="count">{{ catering ? 'Added' : '-' }}</td>
  </tr>
</template>

<script>
  import {ADD_CATERING} from "../../../store/actionTypes";

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

    data: () => ({
      disappear: false
    }),

    methods: {
      addCatering() {
        this.$store.commit(ADD_CATERING, this.propertyId);
        setTimeout(() => this.disappear = true, 1000);
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
        left: -20px;
      }

      img {
        position: absolute;
        left: 80px;
        width: 20px;
        height: 20px;
      }
    }

    .count {
      text-align: right;
    }
  }
</style>