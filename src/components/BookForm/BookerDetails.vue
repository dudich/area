<template>
  <div>
    <h4 class="book-form-caption">Booker Details</h4>
    <custom-input v-for="(input, key) in details" :key="key" :input="input">
      <i :class="input.iconClass"></i>
    </custom-input>
    <autocomplete-input :input="location.address">
      <i class="fas fa-map-marker-alt"></i>
    </autocomplete-input>
    <v-layout row wrap>
      <v-flex class="pr-1" sm6 xs12>
        <autocomplete-input :input="location.country"></autocomplete-input>
      </v-flex>
      <v-flex class="pl-1" sm6 xs12>
        <autocomplete-input :input="location.city"></autocomplete-input>
      </v-flex>
      <v-flex class="pr-1" sm6 xs12>
        <autocomplete-input :input="location.state"></autocomplete-input>
      </v-flex>
      <v-flex class="pl-1" sm6 xs12>
        <autocomplete-input :input="location.zip"></autocomplete-input>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import CustomInput from '../../components/Controlers/CustomInput'
  import AutocompleteInput from '../../components/Controlers/AutocompleteInput'

  export default {
    name: 'booker-details',

    props: {
      details: {
        type: Object,
        required: true
      },
      location: {
        type: Object,
        required: true
      }
    },

    data () {
      return {

      }
    },

    components: {
      CustomInput,
      AutocompleteInput
    }
  }
</script>

<style lang="scss">
  .book-form-caption {
    margin: {
      left: 5px;
      bottom: 5px;
    }
  ;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
  }

  .book-textarea {
    height: 85%;

    .book-input {
      height: 100%;

      .v-input__control {
        height: 100%;

        .v-input__slot {
          height: 100%;

          .v-text-field__slot {
            height: 100%;

            textarea {
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>