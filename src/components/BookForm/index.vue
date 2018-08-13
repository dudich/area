<template>
  <v-layout row>
    <v-flex xl6 offset-xl3>
      <v-container>
        <h3 class="book-caption">Book and Confirm</h3>
        <v-layout row wrap>
          <v-flex class="px-5 mb-4" xs12 sm6>
            <booker-details :details="bookerDetails"></booker-details>
          </v-flex>
          <v-flex class="px-5 mb-4" xs12 sm6>
            <contacts-on-site :contacts="contactsOnSite" :details="bookerDetails"></contacts-on-site>
            <v-layout row justify-space-between>
              <required-action :caption="siteInspectionCaption" @SELECT_REQUIRED_ACTION="changeSiteInspection"></required-action>
              <required-action :caption="accommodationCaption" @SELECT_REQUIRED_ACTION="changeAccommodation"></required-action>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6>
                <div class="book-select">
                  <v-select
                    label="Arrival Time"
                    outline
                  ></v-select>
                  <i class="fas fa-star-of-life"></i>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import BookerDetails from './BookerDetails'
  import ContactsOnSite from './ContacsOnSite'
  import RequiredAction from './RequiredAction'

  export default {
    name: 'book-form',

    data() {
      return {
        bookerDetails: {
          name: '',
          email: '',
          phoneDay: '',
          phoneMobile: ''
        },

        contactsOnSite: {
          name: '',
          email: '',
          phoneDay: '',
          phoneMobile: ''
        },

        siteInspection: 'no',
        accommodation: 'no',
        siteInspectionCaption: ' Site Inspection Required?',
        accommodationCaption: 'Accommodation Required?'
      }
    },

    methods: {
      changeSiteInspection(string) {
        this.siteInspection = string;
      },
      changeAccommodation(string) {
        this.accommodation = string;
      }
    },

    components: {
      BookerDetails,
      ContactsOnSite,
      RequiredAction
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .book-caption {
    margin: {
      top: 25px;
      bottom: 25px;
    }
    font-size: 20px;
  }

  .book-select {
    position: relative;

    .fa-star-of-life {
      position: absolute;
      top: 5px;
      left: -25px;
      font-size: 18px;
    }

    .v-label {
      top: 12px;
      color: $grey !important;

      &--active {
        transform: none;
      }
    }

    .v-input__slot {
      min-height: auto;
      height: 48px;
      background-color: $light-gray !important;
    }

    .v-input__append-inner {
      margin-top: 10px !important;
    }
  }
</style>