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
                <arrival-time></arrival-time>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex class="pr-2" xs12 sm6>
            <book-texarea :placeholder="'How did you hear about us?'"></book-texarea>
          </v-flex>
          <v-flex class="pl-2" xs12 sm6>
            <book-texarea :placeholder="'Comments'"></book-texarea>
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
  import ArrivalTime from './ArrivalTime'
  import BookTexarea from './BookTextarea'

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
      RequiredAction,
      ArrivalTime,
      BookTexarea
    }
  }
</script>

<style lang="scss">
  .book-caption {
    margin: {
      top: 25px;
      bottom: 25px;
    }
    font-size: 20px;
  }
</style>