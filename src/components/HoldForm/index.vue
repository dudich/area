<template>
  <v-layout row>
    <v-flex xl6 offset-xl3>
      <v-container>
        <h3 class="hold-caption">Hold Room</h3>
        <v-form ref="form"  v-model="valid" lazy-validation>
          <v-layout row wrap>
            <v-flex class="px-5 mb-2" xs12 sm6>
              <h4 class="hold-form-caption">Booker Details</h4>
              <custom-input
                v-for="(input, key) in details"
                :key="key"
                :input="input"
                :rules="[rules.required]"
              >
                <i :class="input.iconClass"></i>
              </custom-input>
            </v-flex>
            <v-flex class="px-5 mb-2 mt-4" xs12 sm6>
              <v-layout row>
                <v-flex class="mt-4" xs12 sm10>
                  <custom-select
                    class="text--black"
                    :input="aboutUs"
                    :rules="[rules.required]"
                    @UPDATE_SELECT_VALUE="updateAboutUs"
                  >
                    <i class="fas fa-star-of-life"></i>
                  </custom-select>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <custom-textarea
                    :value="comment"
                    @UPDATE_INPUT_VALUE="updateComment"
                  >
                    <i class="fas fa-pen"></i>
                  </custom-textarea>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-btn
                class="btn btn-large no-text-transform bg-blue mb-4"
                @click="confirmHold"
                :disabled="!valid"
                dark
                round
                large
                flatgit 
              >Hold
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import {IS_VALID} from "../../store/actionTypes";
  import CustomInput from '../../components/FormComponents/CustomInput'
  import CustomSelect from '../../components/FormComponents/CustomSelect'
  import CustomTextarea from '../../components/FormComponents/CustomTextarea'

  export default {
    name: 'hold-form',

    data() {
      return {
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
        aboutUs: {
          select: '',
          items: ['Booking.com', 'Expedia', 'Facebook', 'Internet', 'Referral'],
          label: 'How did you hear about us?'
        },
        comment: '',
        valid: true,
        rules: {
          required: v => !!v || 'Required.',
        }
      }
    },

    methods: {
      updateAboutUs(payload) {
        this.aboutUs.select = payload
      },
      updateComment(payload) {
        this.comment = payload
      },
      confirmHold() {
        if (this.$refs.form.validate()) {
          EventBus.$emit(OPEN_CONFIRMATION_MODAL);
          setTimeout(() => EventBus.$emit(CLOSE_CONFIRMATION_MODAL), 3000);
        }
      }
    },

    components: {
      CustomInput,
      CustomSelect,
      CustomTextarea
    }
  }
</script>

<style lang="scss">
  .hold-caption {
    margin: {
      top: 25px;
      bottom: 25px;
    }
    font-size: 20px;
  }

  .hold-form-caption {
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