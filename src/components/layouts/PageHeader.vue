<template>
  <v-toolbar app>
    <div class="logo">
      <v-jumbotron :src="logo" to="/"></v-jumbotron>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          {{ item.title }}
        </v-list-tile>
        <v-list-tile class="corp-sign-in">
          <i class="fas fa-lock"></i>
          Corporate Sign-In
        </v-list-tile>
      </v-list>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import logo from '../../assets/header-logo.png'

  export default {
    name: 'page-header',

    data() {
      return {
        logo,
        menuItems: [
          {title: 'home', link: '/'},
          {title: 'meeting rooms', link: '/meeting-rooms'},
          {title: 'our team', link: '/our-team'},
          {title: 'accommodation', link: '/accommodation'},
          {title: 'weddings', link: '/weddings'},
          {title: 'catering', link: '/catering'},
          {title: 'av', link: '/av'},
          {title: 'contact', link: '/contact'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/colors';

  .v-toolbar {
    padding: {
      top: 15px;
      bottom: 15px;
    }
    background-color: $dark-blue!important;
    z-index: 1000!important;

    .corp-sign-in {
      border: 1px solid #fff;
      border-radius: 4px;
      cursor: pointer;

      i {
        margin-right: 10px;
        font-size: 20px;
      }
    }

    .logo {
      width: 200px;
      height: 80px;

      .v-jumbotron {
        height: 100% !important;

        &__image {
          width: 100%;
        }
      }
    }

    &__content {
      height: 80px!important;
    }

    .v-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: inherit!important;

      &__tile {
        font-weight: 900;
        text-transform: capitalize;
        &:hover {
          background: none!important;
          color: $green!important;
        }

        &--active {
          color: $green!important;
        }
      }
    }
  }
</style>