<template>
  <tr class="catering">
    <td class="text text-xs-left text-sm-right">
      Catering
      <add-catering-button
        class="hidden-xs-only"
        :catering="catering"
        :id="propertyId"
        :text="['Add', 'Remove']"
      ></add-catering-button>
    </td>
    <td class="count text-xs-right">{{ catering ? 'Added' : '-' }}</td>
  </tr>
</template>

<script>
  import AddCateringButton from '../../Buttons/AddCateringButton'

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

    components: {
      AddCateringButton
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