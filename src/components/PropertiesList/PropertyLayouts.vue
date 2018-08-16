<template>
  <div class="property-layouts">

    <p class="property-layouts__data">
      <span class="property-layouts__type">{{ selectedLayout }}</span>
      <span class="property-layouts__capacity">{{ selectedCapacity }} People</span>
      <span class="property-layouts__area-label">Floor Area</span>
      <span class="property-layouts__area-count">{{ area }} sqm</span>
    </p>
    <ul class="property-layouts__list">
      <li v-for="(layout, i) in layouts" :key="i" :class="{ active: layout.type === state }">
        <label :style="{ backgroundImage: `url(${layout.img})` }" @click="changeLayout">
          <input type="radio" :value="layout.type" v-model="state">
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  import findIndexByKey from '../../mixins/findIndexByKey'

  export default {
    name: 'property-layout',

    mixins: [findIndexByKey],

    props: {
      layouts: {
        type: Array,
        required: true
      },
      area: {
        type: Number,
        required: true
      },
      select: {
        type: String,
        required: true
      },
      propertyId: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        state: this.select
      }
    },

    computed: {
      selectedCapacity() {
        const index = this.findIndexByKey(this.layouts, 'type', this.state);
        return this.layouts[index].capacity;
      },
      selectedLayout() {
        const index = this.findIndexByKey(this.layouts, 'type', this.state);
        return this.layouts[index].type;
      }
    },

    mounted() {
      this.changeLayout();
    },

    methods: {
      changeLayout() {
        EventBus.$emit(`CHANGE_LAYOUT_TYPE_${this.propertyId}`, this.selectedCapacity)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";
  .property-layouts {

    &__data {
      font-size: 16px;
      text-align: left;
      color: #fff;
    }

    &__capacity,
    &__area-label,
    &__type {
      font-weight: 700;
    }

    &__type {
      margin-right: 30px;
      text-transform: capitalize;
    }

    &__capacity {
      margin-right: 50px;
    }

    &__area-label {
      margin-right: 10px;
    }


    &__list {
      text-align: left;

      li {
        position: relative;
        display: inline-block;
        margin: {
          right: 5px;
          bottom: 5px;
        };
        width: 80px;
        height: 60px;
        border: 1px solid #000;
        background-color: rgba(255, 255, 255, .1);

        :hover,
        &.active {
          border-color: $green;
        }
      }

      label {
        display: block;
        height: 100%;
        background: {
          repeat: no-repeat;
          size: 80% 80%;
          position: center center;
        };
        cursor: pointer;
      }

      input {
        display: none;
      }
    }
  }
</style>