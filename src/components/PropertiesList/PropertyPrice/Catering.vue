<template>
  <tr class="catering">
    <td class="text">
      Catering
      <v-btn class="btn-add-catering" dark round v-if="!catering" @click="addCatering">Add</v-btn>
      <img src="../../../assets/check-icon.png" alt="check-icon" v-if="catering" :class="{ opacity: disappear }">
    </td>
    <td class="count">{{ catering ? 'Added' : '$0.00' }}</td>
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
      }
    },

    data: () => ({
      disappear: false
    }),

    methods: {
      addCatering() {
        this.$emit(ADD_CATERING);
        setTimeout(() => this.disappear = true, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catering {

    td {
      padding: 5px 10px;
      font-size: 16px;
      font-weight: 700;
      color: white;
    }

    .text {
      position: relative;
      text-align: right;

      .btn-add-catering {
        position: absolute;
        top: -7px;
        left: -16px;
      }

      img {
        position: absolute;
        left: 60px;
        width: 20px;
        height: 20px;
      }

      .opacity {
        opacity: 0;
        transition: 2s;
      }
    }

    .count {
      text-align: right;
    }
  }
</style>