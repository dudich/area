<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="px-5" xs12 sm6>
        <h4 class="hold-form-caption">Booker Details</h4>
        <div class="hold-input">
          <v-text-field
            placeholder="Booker Name"
            single-line
            solo
          ></v-text-field>
          <i class="fas fa-user"></i>
        </div>
        <div class="hold-input">
          <v-text-field
            class="hold-input"
            placeholder="Email"
            single-line
            solo
          ></v-text-field>
          <i class="fas fa-envelope"></i>
        </div>
        <div class="hold-input">
          <v-text-field
            class="hold-input"
            placeholder="Phone Number-Day"
            single-line
            solo
          ></v-text-field>
          <i class="fas fa-phone-square"></i>
        </div>
        <div class="hold-input">
          <v-text-field
            class="hold-input"
            placeholder="Phone Number-Mobile"
            single-line
            solo
          ></v-text-field>
          <i class="fas fa-phone-square"></i>
        </div>
      </v-flex>
      <v-flex class="px-5" xs12 sm6>
        <h4 class="hold-form-caption">Booker Comments</h4>
        <div class="hold-input hold-textarea">
          <v-textarea
            class="hold-input"
            placeholder="Comments"
            solo
          ></v-textarea>
          <i class="fas fa-pen"></i>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

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
    };
    font-size: 18px;
    font-weight: 400;
    text-align: left;
  }

  .hold-input {
    position: relative;

    .v-input__slot {
      border: 1px solid #000;
      border-radius: 0!important;
      background-color: gainsboro!important;
    }

    i {
      position: absolute;
      top: 10px;
      left: -35px;
      font-size: 28px;
      color: #000;
    }
  }

  .hold-textarea {
    height: 85%;

    .hold-input {
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