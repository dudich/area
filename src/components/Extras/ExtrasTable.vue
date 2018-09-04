<template>
  <v-data-table
    :headers="headers"
    :items="extras"
    class="extras-table"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left text-white">{{ props.item.name }}</td>
      <td class="text-xs-center text-light-green">{{ quantity(props.item) }}</td>
      <td class="text-xs-center text-light-green">{{ unitePrice(props.item) }}</td>
      <td class="text-xs-center text-light-green">{{ cost(props.item) }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    props: {
      extras: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Quantity',
            align: 'center',
            sortable: false,
            value: 'quantity'
          },
          {
            text: 'Unite price',
            align: 'center',
            sortable: false,
            value: 'unitePrice'
          },
          {
            text: 'Cost',
            align: 'center',
            sortable: false,
            value: 'cost'
          }
        ],
      }
    },

    methods: {
      quantity(extra) {
        return extra.quantity > 0 ? extra.quantity : '-';
      },
      unitePrice(extra) {
        return extra.quantity > 0 ? `$ ${ extra.price.toFixed(2) }` : '-';
      },
      cost(extra) {
        return extra.quantity > 0 ? `$ ${ (extra.quantity * extra.price).toFixed(2) }` : '-';
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .extras {

    &-table {
      margin-top: 40px;

      .v-table {
        background-color: $dark-blue;
        tr {

          &:not(:last-child),
          &:first-child {
            border-bottom: 1px solid #fff !important;
          }

          &:hover {
            background-color: transparent !important;
          }
        }

        th {
          font-size: 16px;
          color: #fff !important;
        }

        td {
          width: 25%;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
</style>