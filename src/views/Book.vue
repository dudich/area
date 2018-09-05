<template>
  <div class="hold">
    <v-layout class="bg-dark-blue" row>
      <v-flex xl6 offset-xl3>
        <stage-list class="bg-dark-blue"></stage-list>
      </v-flex>
    </v-layout>
    <component
      :is="currentView"
      :arrivalHour="arrivalHour"
      :arrivalMinutes="arrivalMinutes"
      :arrivalDayPart="arrivalDayPart"
    ></component>
    <v-layout class="bg-dark-blue" row>
      <v-flex xl6 offset-xl3>
        <property-summary
          :property="property"
          :currentView="currentView"
          :caption="'Booking'"
        ></property-summary>
      </v-flex>
    </v-layout>
    <modal :width="500">
      <ConfirmModalContent
        :terms="terms"
        :caption="'Payment'"
        @ACCEPT_TERMS="terms = false"
      ></ConfirmModalContent>
    </modal>
  </div>
</template>

<script>
  import {CLOSE_CONFIRMATION_MODAL} from "../store/actionTypes";
  import findIndexByKey from '../mixins/findIndexByKey'
  import StageList from '../components/StageList'
  import Modal from '../components/Modal'
  import ConfirmModalContent from '../components/PropertySummary/ConfirmModalContent'
  import BookForm from '../components/BookForm/index'
  import ConfirmDialog from '../components/PropertySummary/ConfirmDialog'
  import PropertySummary from '../components/PropertySummary'

  export default {
    name: 'book',

    mixins: [findIndexByKey],

    data() {
      return {
        currentView: BookForm,
        terms: true
      }
    },

    computed: {
      properties() {
        return this.$store.getters.properties;
      },

      property() {
        return this.properties[this.findIndexByKey(this.properties, 'id', this.$route.params.id)];
      },
      eventStart() {
        return this.$store.getters.filters.eventStart.date;
      },
      arrivalHour() {
        let hour = new Date(this.eventStart).getHours();
        if(hour > 12) {
          hour = hour - 12;
        }
        if(hour < 10) {
          hour = `0${hour}`;
        }
        return `${hour}`;
      },

      arrivalMinutes() {
        let minutes = new Date(this.eventStart).getMinutes();
        return minutes < 10 ? `0${minutes}` : `${minutes}`;
      },

      arrivalDayPart() {
        const hour = new Date(this.eventStart).getHours();
        return hour > 12 ? 'PM' : 'AM';
      }
    },


    mounted() {
      EventBus.$on(CLOSE_CONFIRMATION_MODAL, () => this.currentView = ConfirmDialog);
    },

    components: {
      StageList,
      Modal,
      BookForm,
      PropertySummary,
      ConfirmDialog,
      ConfirmModalContent
    }
  }
</script>