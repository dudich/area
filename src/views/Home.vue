<template>
    <div class="select package">
        <ul class="booking-stage-list">
            <li class="booking-stage-list__item">{{ bookingStages.details }}</li>
            <li class="booking-stage-list__item active">{{ bookingStages.selectPackage }}</li>
            <li class="booking-stage-list__item">{{ bookingStages.pay }}</li>
        </ul>

        <div class="select-controls">

        </div>

        <ul class="property-list">
            <li class="property-list__item" v-for="(property, index) in properties" :key="property.id">
                <div class="property-list__item-container">
                    <div class="left-side">
                        <p class="property-name">{{ property.name }}</p>

                        <div class="flex-container">
                            <div class="item-gallery">

                                <div class="main-img-container">
                                    <div class="property-status">
                                        <span>{{ property.status }}</span>
                                    </div>

                                    <img class="main-img" :src="property.images.main" alt="img">

                                    <div class="property-capacity">
                                        <span class="count">{{ property.capacity }}</span>

                                        <div class="icon-container">
                                            <i class="fas fa-users"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="other-img-container">
                                    <img class="other-img"
                                         :src="other"
                                         alt="img"
                                         v-for="other in property.images.others"
                                    >
                                </div>
                            </div>

                            <div class="item-description">
                                <p class="text">{{ property.description }}</p>
                                <div class="property-features">
                                    <span class="property-capacity">{{ property.capacity }} people</span>
                                    <span class="property-type">{{ property.type }}</span>
                                </div>
                                <ul class="arrangement-type">
                                    <li class="arrangement-type__item"
                                        v-for="type in property.arrangementTypes"
                                        :class="{ active: selected === type.type }"
                                    >
                                        <label>
                                            <input type="radio" :value="type.type" v-model="selected">
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="catering">

                            <div class="catering-checkbox">
                                <i class="fas fa-check"
                                   :style="{ color: property.catering ? 'green' : 'transparent' }"></i>
                            </div>

                            <button class="btn" type="button" @click="property.catering = !property.catering">Catering
                            </button>

                            <div class="notification" :style="{ opacity: property.catering ? '1' : '0' }">
                                Catering Added! We will contact you and details your booking is confirmed.
                            </div>
                        </div>

                        <table class="price">
                            <tr class="price-property">
                                <td class="text">Room Hire Cost-Half Day</td>
                                <td class="count">${{ property.price }}</td>
                            </tr>
                            <tr class="price-extras">
                                <td class="text">Extras</td>
                                <td class="count">${{ property.extrasPrice }}</td>
                            </tr>
                            <tr class="price-total">
                                <td class="text">Total</td>
                                <td class="count">${{ totalPrice(property) }}</td>
                            </tr>
                        </table>

                        <div class="btn-container">
                            <button class="btn btn-confirm" type="button">Book and Confirm</button>
                        </div>

                        <div class="btn-container">
                            <button class="btn btn-hold" type="button">Hold</button>
                        </div>
                    </div>

                    <button class="btn btn-add-extras" type="button" @click="openExtras(index)">Add Extras</button>
                </div>
            </li>
        </ul>

        <extras :extras="extras"></extras>
    </div>
</template>

<script>
  import Extras from '@/components/Extras'

  export default {
    name: 'home',
    data() {
      return {
        bookingStages: {
          details: 'Event Details',
          selectPackage: 'Select Package',
          pay: 'Book and Pay'
        },
        selected: null
      }
    },

    computed: {
      properties() {
        return this.$store.getters.properties;
      },
      extras() {
        return this.$store.getters.extras;
      }
    },

    methods: {
      totalPrice(property) {
        return property.price + property.extrasPrice
      }
    },

    components: {
      Extras
    }
  }
</script>

<style lang="scss" scoped>
    .booking-stage-list {
        display: flex;
        justify-content: center;
        padding: 10px 20%;
        background-color: #00528b;

        &__item {
            margin: {
                right: 100px;
                left: 100px;
            }
            font-size: 20px;
            color: white;

            &.active {
                font-weight: 900;
            }
        }
    }

    .property-list {
        &__item {
            margin-bottom: 20px;

            &-container {
                position: relative;
                display: flex;
                justify-content: space-between;
                padding: 20px 10px;
                background-color: #00528b;
            }

            .left-side {
                .property-name {
                    margin: {
                        bottom: 5px;
                        left: 5px;
                    }
                    text-align: left;
                    text-transform: capitalize;
                    color: white;
                }
                .flex-container {
                    display: flex;
                    justify-content: space-between;
                }
            }

            .item-gallery {
                margin-right: 20px;

                .main-img {
                    &-container {
                        position: relative;
                    }
                }

                .property-status {
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 5px 10px;
                    color: lightgreen;
                    background-color: white;
                    border: 1px solid black;
                    font-size: 16px;
                    font-weight: 700;
                }

                .property-capacity {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;

                    .count {
                        display: block;
                        margin-bottom: 5px;
                        font-size: 20px;
                        font-weight: 700;
                        color: white;
                    }

                    .icon-container {
                        width: 40px;
                        height: 30px;
                        border-radius: 10px;
                        border: 1px solid black;
                        background-color: white;

                        .fas {
                            font-size: 20px;
                            line-height: 30px;
                        }
                    }
                }

                .other-img {
                    &-container {
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }

            .item-description {
                max-width: 350px;
                color: aliceblue;

                .text {
                    margin: {
                        top: 0;
                        bottom: 20px;
                    }
                ;
                    text-align: left;
                    word-wrap: break-word;
                }

                .property-features {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }

                .arrangement-type {
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;

                    &__item {
                        margin: 5px;
                        width: 80px;
                        height: 80px;
                        border: {
                            width: 3px;
                            style: solid;
                            color: white;
                        }
                        border-radius: 10px;
                        background-color: white;
                        transition: .5s;

                        &:hover,
                        &.active {
                            border-color: green;
                        }

                        label {
                            display: block;
                            height: 100%;
                            cursor: pointer;

                            input {
                                display: none;
                            }
                        }
                    }
                }
            }

            .catering {
                position: relative;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-bottom: 5px;

                &-checkbox {
                    display: inline-block;
                    margin-right: 10px;
                    width: 35px;
                    height: 25px;
                    border-radius: 4px;
                    background-color: white;

                    .fas {
                        font-size: 20px;
                        line-height: 25px;
                        transition: .5s;
                    }
                }

                .notification {
                    position: absolute;
                    top: 40px;
                    right: 0;
                    width: 250px;
                    padding: 10px;
                    border: 2px solid orange;
                    border-radius: 10px;
                    background-color: white;
                    text-align: left;
                    z-index: 100;
                    transition: .5s;
                }
            }

            .price {
                margin-bottom: 15px;
                td {
                    padding: 5px 10px;
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                }

                .text {
                    text-align: right;
                }

                .count {
                    text-align: right;
                }

                &-total td {
                    color: greenyellow;
                }
            }

            .btn {
                &-container {
                    margin-bottom: 10px;
                    text-align: right;
                }
                &-confirm {
                    color: white;
                    background-color: greenyellow;
                }
                &-hold {
                    color: white;
                    background-color: blueviolet;
                }
                &-add-extras {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                }
            }
        }
    }

    /*.property-extras {
        height: 300px;
        border: 1px solid black;
    }*/
</style>
