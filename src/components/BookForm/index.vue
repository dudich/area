<template>
  <v-layout row>
    <v-flex xl6 offset-xl3>
      <v-container>
        <h3 class="book-caption">Book and Confirm</h3>
        <v-layout row wrap>
          <v-flex class="px-5 mb-4" xs12 sm6>
            <h4 class="book-form-caption">Booker Details</h4>
            <custom-input v-for="(input, key) in details" :key="key" :input="input">
              <i :class="input.iconClass"></i>
            </custom-input>
            <autocomplete-input class="mb-2" :input="location.address">
              <i class="fas fa-map-marker-alt"></i>
            </autocomplete-input>
            <v-layout row wrap>
              <v-flex class="pr-1 mb-2" sm6 xs12>
                <autocomplete-input :input="location.country"></autocomplete-input>
              </v-flex>
              <v-flex class="pl-1 mb-2" sm6 xs12>
                <autocomplete-input :input="location.city"></autocomplete-input>
              </v-flex>
              <v-flex class="pr-1 mb-2" sm6 xs12>
                <autocomplete-input :input="location.state"></autocomplete-input>
              </v-flex>
              <v-flex class="pl-1 mb-2" sm6 xs12>
                <custom-input :input="location.zip"></custom-input>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="px-5 mb-4 mt-4" xs12 sm6>
            <v-layout row justify-space-between>
              <required-action
                :caption="siteInspectionCaption"
                @SELECT_REQUIRED_ACTION="changeSiteInspection"
              ></required-action>
              <required-action
                :caption="accommodationCaption"
                @SELECT_REQUIRED_ACTION="changeAccommodation"
              ></required-action>
            </v-layout>
            <v-layout row>
              <v-flex class="pr-1" xs6>
                <custom-input
                  :input="{placeholder: arrivalTime.placeholder, value: arrivalTime.value }"
                  @UPDATE_INPUT_VALUE="updateArrivalTimeInput"
                >
                  <i class="fas fa-star-of-life"></i>
                </custom-input>
              </v-flex>
              <v-flex class="pl-1" xs6 sm4>
                <custom-select
                  :input="{items: arrivalTime.items, select: arrivalTime.select }"
                  @UPDATE_SELECT_VALUE="updateArrivalTimeSelect"
                ></custom-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex class="mt-4" xs12 sm10>
                <custom-select
                  :input="aboutUs"
                  @UPDATE_SELECT_VALUE="updateAboutUs"
                >
                  <i class="fas fa-star-of-life"></i>
                </custom-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <custom-texarea
                  :value="comment"
                  @UPDATE_INPUT_VALUE="updateComment"
                >
                  <i class="fas fa-pen"></i>
                </custom-texarea>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import RequiredAction from './RequiredAction'
  import CustomInput from '../FormComponents/CustomInput'
  import CustomSelect from '../FormComponents/CustomSelect'
  import CustomTexarea from '../../components/FormComponents/CustomTextarea'
  import AutocompleteInput from '../FormComponents/AutocompleteInput'


  export default {
    name: 'book-form',

    data() {
      return {
        comment: '',

        details: {
          name: {
            value: '',
            placeholder: 'Name',
            iconClass: 'fas fa-user'
          },
          email: {
            value: '',
            placeholder: 'Email',
            iconClass: 'fas fa-envelope'
          },
          phoneDay: {
            value: '',
            placeholder: 'Phone Number-Day',
            iconClass: 'fas fa-phone-square'
          },
          phoneMobile: {
            value: '',
            placeholder: 'Phone Number-Mobile',
            iconClass: 'fas fa-phone-square'
          }
        },

        location: {
          address: {
            value: 'null',
            items: ['Address 1', 'Address 2'],
            placeholder: 'Address'
          },
          country: {
            value: null,
            items: ['USA', 'England', 'Australia', 'New Zealand'],
            placeholder: 'Country'
          },
          city: {
            value: null,
            items: ['London', 'Berlin', 'Cairo', 'Boston'],
            placeholder: 'City'
          },
          state: {
            value: null,
            items: [
              'Alabama', 'Alaska', 'American Samoa', 'Arizona',
              'Arkansas', 'California', 'Colorado', 'Connecticut',
              'Delaware', 'District of Columbia', 'Federated States of Micronesia',
              'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
              'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
              'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
              'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
              'Missouri', 'Montana', 'Nebraska', 'Nevada',
              'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
              'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
              'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
              'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
              'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
              'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ],
            placeholder: 'State'
          },
          zip: {
            value: null,
            items: ['1235', '5469', '4587'],
            placeholder: 'ZIP'
          },
        },

        arrivalTime: {
          value: '',
          select: 'AM',
          items: ['AM', 'PM'],
          placeholder: 'Arrival Time',
        },

        aboutUs: {
          select: '',
          items: ['Booking.com', 'Expedia', 'Facebook', 'Internet', 'Referral'],
          label: 'How did you hear about us?'
        },

        siteInspection: '',
        accommodation: '',
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
      },
      updateArrivalTimeInput(payload) {
        this.arrivalTime = {...this.arrivalTime, value: payload}
      },
      updateArrivalTimeSelect(payload) {
        this.arrivalTime = {...this.arrivalTime, select: payload}
      },
      updateAboutUs(payload) {
        this.aboutUs.select = payload
      },
      updateComment(payload) {
        this.comment = payload
      }
    },

    components: {
      RequiredAction,
      CustomInput,
      CustomSelect,
      CustomTexarea,
      AutocompleteInput
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
</style>