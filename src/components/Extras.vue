<template>
    <div class="extras">
        <ul class="extras-list">
            <li class="extras-item" v-for="extra in extras" :id="extra.id">
                <p class="extras-name">{{ extra.name }}</p>
                <div class="extras-icon" :class="{ active: selected === extra.id }">
                    <label>
                        <i :class="extra.icon"></i>
                        <input type="radio" :value="extra.id" v-model="selected">
                    </label>

                    <div class="extras-checkbox">
                        <label>
                            <i class="fas fa-check" v-if="checkedExtras.indexOf(extra.id) !== -1"></i>
                            <input type="checkbox" :value="extra.id" v-model="checkedExtras">
                        </label>
                    </div>
                </div>

                <span class="extras-price">${{ extra.price }}</span>
            </li>
        </ul>

        <p class="extras-description">{{ selected ? description : '' }}</p>
    </div>
</template>

<script>
  export default {
    props: ['extras'],
    data() {
      return {
        selected: null,
        checkedExtras: [],
      }
    },
    computed: {
      description() {
        return this.extras[+this.selected].description
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
    .extras {
        padding: 30px 0 5px;
        background-color: #1b4350;

        &-list {
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }

        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 30px;
        }

        &-name,
        &-price {
            max-width: 100px;
            margin-bottom: 5px;
            color: white;
            font-weight: 700;
        }

        &-icon {
            position: relative;
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
            background-color: white;
            border: 4px solid black;
            border-radius: 5px;
            text-align: center;
            &:hover,
            &.active {
                border-color: #7FBE42;
            }

            label {
                display: block;
                height: 100%;
                &:hover {
                    cursor: pointer;
                }
            }

            input {
                display: none;
            }

            .fas,
            .fab {
                font-size: 60px;
                line-height: 100px;
            }
        }

        &-checkbox {
            position: absolute;
            bottom: -14px;
            left: -14px;
            width: 30px;
            height: 25px;
            border: 1px solid black;
            border-radius: 4px;
            background-color: white;

            input {
                display: none;
            }

            label {
                display: block;
                height: 100%;
            }

            .fas {
                font-size: 30px;
                line-height: 25px;
                color: #7FBE42;
            }
        }

        &-description {
            color: white;
            text-align: center;
        }
    }
</style>