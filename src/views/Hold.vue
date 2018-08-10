<template>
    <div class="hold">
      <stage-list></stage-list>
      <h3 class="hold-caption">Hold Room</h3>
      <component :is="currentView"></component>
      <property-summary :property="property"></property-summary>
      <modal>
        <h1>Confirming hold</h1>
        <ball-spin-fade-loader color="#000000" size="20px"></ball-spin-fade-loader>
      </modal>
    </div>
</template>

<script>
  import {CLOSE_CONFIRMATION_MODAL} from "../store/actionTypes";
  import findIndexByKey from '../mixins/findIndexByKey'
  import StageList from '../components/StageList'
  import Modal from '../components/Modal'
  import HoldForm from '../components/Hold/HoldForm'
  import ConfirmDialog from '../components/ConfimDialog'
  import PropertySummary from '../components/PropertySummary'

  export default {
    name: 'hold',

    mixins: [findIndexByKey],

    data() {
      return {
        currentView: HoldForm
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
      ConfirmDialog
    }
  }
</script>

<style lang="scss" scoped>

</style>