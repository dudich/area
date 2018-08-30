<template>
  <v-layout row>
    <v-flex xl6 offset-xl3>
      <v-container>
        <h3 class="book-caption">Book and Confirm</h3>
        <v-form class="book-form" ref="form"  v-model="valid" lazy-validation>
        <v-layout row wrap>
          <v-flex class="px-5 mt-2" xs12 sm8 md6 offset-sm2 offset-md0>
            <h4 class="book-form__caption">Booker Details</h4>
            <custom-input
              :input="details.name"
              :rules="rules.name"
            >
              <i :class="details.name.iconClass"></i>
            </custom-input>
            <custom-input
              :input="details.email"
              :rules="rules.email"
            >
              <i :class="details.email.iconClass"></i>
            </custom-input>
            <custom-input
              :input="details.phoneDay"
              :rules="rules.phone"
            >
              <i :class="details.phoneDay.iconClass"></i>
            </custom-input>
            <custom-input
              :input="details.phoneMobile"
              :rules="rules.phone"
            >
              <i :class="details.phoneMobile.iconClass"></i>
            </custom-input>
            <autocomplete-input
              class="mb-2"
              :input="location.address"
              :rules="rules.required"
            >
              <i class="fas fa-map-marker-alt"></i>
            </autocomplete-input>
            <v-layout row wrap>
              <v-flex class=" autocomplete-input pr-1 mb-2" sm6 xs12>
                <autocomplete-input
                  :input="location.country"
                  :rules="rules.required"
                ></autocomplete-input>
              </v-flex>
              <v-flex class="autocomplete-input pl-1 mb-2" sm6 xs12>
                <autocomplete-input
                  :input="location.city"
                  :rules="rules.required"
                ></autocomplete-input>
              </v-flex>
              <v-flex class="autocomplete-input pr-1 mb-2" sm6 xs12>
                <autocomplete-input
                  :input="location.state"
                  :rules="rules.required"
                ></autocomplete-input>
              </v-flex>
              <v-flex class="autocomplete-input pl-1 mb-2" sm6 xs12>
                <custom-input
                  :input="location.zip"
                  :rules="rules.required"
                ></custom-input>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="px-5 mt-4 mb-4" xs12 sm8 md6 offset-sm2 offset-md0>
            <div class="required-actions">
              <required-action
                :caption="siteInspectionCaption"
                :rules="rules.required"
                @SELECT_REQUIRED_ACTION="changeSiteInspection"
              ></required-action>
              <required-action
                :caption="accommodationCaption"
                :rules="rules.required"
                @SELECT_REQUIRED_ACTION="changeAccommodation"
              ></required-action>
            </div>
            <v-layout row>
              <v-flex class="pr-1" xs8 sm6>
                <custom-input
                  :input="{placeholder: arrivalTime.placeholder, value: arrivalTime.value }"
                  :rules="rules.time"
                  @UPDATE_INPUT_VALUE="updateArrivalTimeInput"
                >
                  <i class="fas fa-star-of-life"></i>
                </custom-input>
              </v-flex>
              <v-flex class="pl-1" xs4 sm3 md4>
                <custom-select
                  :input="{items: arrivalTime.items, select: arrivalTime.select }"
                  @UPDATE_SELECT_VALUE="updateArrivalTimeSelect"
                ></custom-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex class="mt-4" xs12 md10>
                <custom-select
                  :input="aboutUs"
                  :rules="rules.required"
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
          <div class="submit px-5">
            <v-btn
              class="btn btn-large no-text-transform bg-blue mb-4 mx-0"
              @click="confirmBook"
              :disabled="!valid"
              dark
              round
              large
              flat
            >Book and Confirm
            </v-btn>
          </div>
        </v-layout>
        </v-form>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import {OPEN_CONFIRMATION_MODAL} from "../../store/actionTypes";
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
        valid: true,
        rules: {
          required: [v => !!v || 'Field is required'],
          name: [
            v => !!v || 'Name is required.',
            v => /[a-zA-Z]/.test(v) || 'Name must be valid',
          ],
          email: [
            v => !!v || 'E-mail is required.',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
          ],
          phone: [
            v => !!v || 'Phone is required.',
            v => /[0-9]/.test(v) || 'Phone must be valid',
            v => (v && v.length >= 10) || 'Phone must be min. 10 characters'
          ],
          time: [
            v => !!v || 'Phone is required.',
            v => /^[ 0-9]+$/.test(v) || 'Time must be valid',
            v => (v && v.length <= 2) || 'Two digits'
          ]
        },

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
      },
      confirmBook() {
        if (this.$refs.form.validate()) {
          EventBus.$emit(OPEN_CONFIRMATION_MODAL);
        }
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
  @import "../../styles/variables";

  .book-caption {
    margin: {
      top: 25px;
      bottom: 25px;
    }
    font-size: 20px;
  }

  .book-form {

    .required-actions {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: $sm - 1) {
        justify-content: space-around;
      }

      @media screen and (max-width: 400px) {
        flex-direction: column;
        align-self: center;
      }
    }

    .autocomplete-input {
      @media screen and (max-width: $xs - 1) {
        padding: 0 !important;
      }
    }

    &__caption {
      margin: {
        left: 5px;
        bottom: 5px;
      }
    ;
      font-size: 18px;
      font-weight: 400;
      text-align: left;
    }

    .submit {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      @media screen and (max-width: $sm - 1) {
        justify-content: center;
      }
    }

    .v-btn--disabled {
      background-color: rgba(0, 0, 0, .12) !important;
    }
  }
</style>