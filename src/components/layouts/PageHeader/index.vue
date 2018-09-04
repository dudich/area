<template>
  <v-toolbar app>
    <div class="page-header__content">
      <div class="logo">
        <v-jumbotron :src="logo" to="/"></v-jumbotron>
      </div>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="openMenu"
      ></v-toolbar-side-icon>
      <v-toolbar-items
        class="hidden-sm-and-down"
        :class="{active: menuOpen}"
      >
        <v-list>
          <v-list-tile
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
          >
            {{ item.title }}
          </v-list-tile>
          <sign-in-link
            v-if="!user.logIn"
            :openSignIn="openSignIn"
          ></sign-in-link>
          <sign-out-link
            v-else
            :signOut="signOut"
            :userName="user.name"
          ></sign-out-link>
        </v-list>
      </v-toolbar-items>
    </div>
  </v-toolbar>
</template>

<script>
  import logo from '../../../assets/header-logo.png'
  import {
    OPEN_SIGN_IN_MODAL,
    USER_SIGN_OUT
  } from "../../../store/actionTypes";
  import SignInLink from './SignInLink'
  import SignOutLink from './SignOutLink'

  export default {
    name: 'page-header',

    data() {
      return {
        logo,
        menuOpen: false,
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
    },

    computed: {
      user() {
        return this.$store.getters.user
      }
    },

    methods: {
      openSignIn() {
        EventBus.$emit(OPEN_SIGN_IN_MODAL)
      },

      signOut() {
        this.$store.commit(USER_SIGN_OUT)
      },

      openMenu() {
        this.menuOpen = !this.menuOpen
      }
    },

    components: {
      SignInLink,
      SignOutLink
    }
  }
</script>

<style lang="scss">
  @import "../../../styles/variables";
  @import '../../../styles/colors';

  .v-toolbar {
    padding: {
      top: 15px;
      bottom: 15px;
    }
    background-color: $dark-blue !important;
    z-index: 200 !important;
    box-shadow: none !important;

    .logo {
      align-self: flex-start;
      width: 200px;
      height: 80px;

      .v-jumbotron {
        height: 100% !important;

        &__image {
          width: 100%;
        }
      }
    }

    .v-toolbar__side-icon .v-icon{
      font-size: 40px;
    }

    &__content {
      height: 80px !important;

      .page-header__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        @media screen and (max-width: $header-break-point) and (min-width: $sm) {
          flex-direction: column;
        }
      }

      @media screen and (max-width: $header-break-point) and (min-width: $sm) {
        height: 150px !important;
      }

      @media screen and (max-width: $sm - 1) {
        height: auto !important;
      }
    }

    .v-toolbar__items {

      .v-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: inherit !important;

        &__tile {
          font-weight: 900;
          text-transform: capitalize;
          &:hover {
            background: none !important;
            color: $green !important;
          }

          &--active {
            color: $green !important;
          }
        }

        @media screen and (max-width: $sm - 1) {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media screen and (max-width: $sm - 1) {
        width: 100%;
      }
    }

    .hidden-sm-and-down.active {
      display: block !important;
    }

  }
</style>