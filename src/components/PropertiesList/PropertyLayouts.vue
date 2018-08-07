<template>
  <div class="property-layouts">

    <p class="property-layouts__data">
      <span class="property-layouts__capacity">{{ selectedCapacity() }} People</span>
      <span class="property-layouts__area-label">Floor Area</span>
      <span class="property-layouts__area-count">{{ selectedArea() }} sqm</span>
    </p>
    <ul class="property-layouts__list">
      <li v-for="(layout, i) in layouts" :key="i" :class="{ active: layout.name === selected }">
        <label :style="{ backgroundImage: `url(${layout.img})` }">
          <input type="radio" :value="layout.name" v-model="selected">
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

    data: () => ({
      selected: 'theater',
      layouts: [
        {
          name: 'theater',
          capacity: 100,
          area: 40,
          img: require('../../assets/layout-icons/theatre.png')
        },
        {
          name: 'cocktail',
          capacity: 130,
          area: 30,
          img: require('../../assets/layout-icons/cocktail.png')
        },
        {
          name: 'classroom',
          capacity: 54,
          area: 10,
          img: require('../../assets/layout-icons/classroom.png')
        },
        {
          name: 'banquet',
          capacity: 80,
          area: 410,
          img: require('../../assets/layout-icons/banquet.png')
        },
        {
          name: 'cabaret',
          capacity: 54,
          area: 45,
          img: require('../../assets/layout-icons/cabaret.png')
        },
        {
          name: 'boardroom',
          capacity: 22,
          area: 80,
          img: require('../../assets/layout-icons/boardroom.png')
        },
        {
          name: 'u-shape',
          capacity: 21,
          area: 90,
          img: require('../../assets/layout-icons/banquet.png')
        }
      ]
    }),

    methods: {
      selectedCapacity() {
        const index = this.findIndexByKey(this.layouts, 'name', this.selected);
        return this.layouts[index].capacity;
      },
      selectedArea() {
        const index = this.findIndexByKey(this.layouts, 'name', this.selected);
        return this.layouts[index].area;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .property-layouts {

    &__data {
      text-align: left;
      color: #fff;
    }

    &__capacity,
    &__area-label {
      font-weight: 700;
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
        background-color: rgba(255, 255, 255, .1);

        :hover,
        &.active {
          background-color: rgba(255, 255, 255, 1);
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