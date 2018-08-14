<template>
  <div class="hold">
    <v-layout class="bg-dark-blue" row>
      <v-flex xl6 offset-xl3>
        <stage-list class="bg-dark-blue"></stage-list>
      </v-flex>
    </v-layout>
    <component :is="currentView"></component>
    <v-layout class="bg-dark-blue" row>
      <v-flex xl6 offset-xl3>
        <property-summary
          :property="property"
          :currentView="currentView"
          :caption="'Hold'"
        ></property-summary>
      </v-flex>
    </v-layout>
    <modal>
      <ConfirmModalContent
        :terms="terms"
        :caption="'Hold'"
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
  import HoldForm from '../components/HoldForm/index'
  import ConfirmDialog from '../components/PropertySummary/ConfirmDialog'
  import PropertySummary from '../components/PropertySummary'

  export default {
    name: 'hold',

    mixins: [findIndexByKey],

    data() {
      return {
        currentView: HoldForm,
        terms: false
      }
    },

    computed: {
      properties() {
        return this.$store.getters.properties;
      },

      property() {
        return this.properties[this.findIndexByKey(this.properties, 'id', this.$route.params.id)];
      }
    },

    mounted() {
      EventBus.$on(CLOSE_CONFIRMATION_MODAL, () => this.currentView = ConfirmDialog);
    },

    components: {
      StageList,
      Modal,
      HoldForm,
      PropertySummary,
      ConfirmDialog,
      ConfirmModalContent
    }
  }
</script>