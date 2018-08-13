<template>
  <div>
    <h4 class="book-form-caption">Booker Details</h4>
    <div class="book-input">
      <v-text-field
        placeholder="Booker Name"
        single-line
        solo
        v-model="details.name"
      ></v-text-field>
      <i class="fas fa-user"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Email"
        single-line
        solo
        v-model="details.email"
      ></v-text-field>
      <i class="fas fa-envelope"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Phone Number-Day"
        single-line
        solo
        v-model="details.phoneDay"
      ></v-text-field>
      <i class="fas fa-phone-square"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Phone Number-Mobile"
        single-line
        solo
        v-model="details.phoneMobile"
      ></v-text-field>
      <i class="fas fa-phone-square"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Address"
        single-line
        solo
      ></v-text-field>
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <v-layout row wrap>
      <v-flex class="px-1" sm4 xs6>
        <div class="book-input">
          <v-text-field
            class="book-input"
            placeholder="Country"
            single-line
            solo
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex class="px-1" sm4 xs6>
        <div class="book-input">
          <v-text-field
            class="book-input"
            placeholder="City"
            single-line
            solo
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex class="px-1" sm4 xs6>
        <div class="book-input">
          <v-text-field
            class="book-input"
            placeholder="State"
            single-line
            solo
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex class="px-1" sm4 xs6>
        <div class="book-input">
          <v-text-field
            class="book-input"
            placeholder="ZIP"
            single-line
            solo
          ></v-text-field>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'booker-details',

    props: {
      details: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .book-form-caption {
    margin: {
      left: 5px;
      bottom: 5px;
    }
  ;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
  }

  .book-input {
    position: relative;

    .v-input__slot {
      border: 2px solid #000;
      border-radius: 0 !important;
      background-color: $light-gray !important;

      input {
        color: $grey;

        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: $grey;
          opacity: 1; /* Firefox */
        }
        &::-ms-input-placeholder { /* Microsoft Edge */
          color: $grey;
        }
      }
    }

    i {
      position: absolute;
      top: 10px;
      left: -35px;
      font-size: 28px;
      color: #000;
    }
  }

  .book-textarea {
    height: 85%;

    .book-input {
      height: 100%;

      .v-input__control {
        height: 100%;

        .v-input__slot {
          height: 100%;

          .v-text-field__slot {
            height: 100%;

            textarea {
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>