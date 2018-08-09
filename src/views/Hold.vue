<template>
    <div class="hold">
      <stage-list></stage-list>
      <h3 class="hold-caption">Hold Room</h3>
      <hold-form></hold-form>
      <property-summary :property="property"></property-summary>
      <modal>
        <h1>Confirming0hold</h1>
      </modal>
    </div>
</template>

<script>
  import findIndexByKey from '../mixins/findIndexByKey'
  import StageList from '../components/StageList'
  import Modal from '../components/Modal'
  import HoldForm from '../components/Hold/HoldForm'
  import PropertySummary from '../components/PropertySummary'

  export default {
    name: 'hold',

    mixins: [findIndexByKey],

    computed: {
      properties() {
        return this.$store.getters.properties;
      },

      property() {
        return this.properties[this.findIndexByKey(this.properties, 'id', this.$route.params.id)];
      }
    },

    components: {
      StageList,
      Modal,
      HoldForm,
      PropertySummary
    }
  }
</script>

<style lang="scss" scoped>

</style>