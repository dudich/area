<template>
  <div id="app">
    <v-app  v-scroll="onScroll">
      <v-toolbar app dark flat>
        <page-header></page-header>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
        <footer-banner></footer-banner>
      </v-content>
      <scroll-top-btn :offsetTop=" offsetTop"></scroll-top-btn>
      <page-footer></page-footer>
      <modal-sign-in :width="450"></modal-sign-in>
    </v-app>
  </div>
</template>

<script>
  import {UPDATE_OFFSET_TOP} from "./store/actionTypes";
  import PageHeader from './components/layouts/PageHeader/index'
  import PageFooter from './components/layouts/PageFooter'
  import FooterBanner from './components/FooterBanner'
  import ScrollTopBtn from './components/ScrollTopBtn'
  import ModalSignIn from './components/SignIn/ModalSignIn'

  export default {
    name: 'app',

    data() {
      return {
        offsetTop: 0
      }
    },

    updated() {
      window.scrollTo(0, 0);
    },


    methods: {
      onScroll() {
         const offset = window.pageYOffset || document.documentElement.scrollTop;
         this.$store.commit(UPDATE_OFFSET_TOP, offset);
      }
    },

    components: {
      PageHeader,
      PageFooter,
      FooterBanner,
      ScrollTopBtn,
      ModalSignIn
    }
  }
</script>

<style lang="scss">
  @import './styles/buttons';
  @import './styles/colors';
  @import './styles/helpers';
  @import './styles/general';

  #app {
    font-family: 'Varela', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;

    .container {
      padding: 0;
    }

    .v-content {
      padding: 110px 0 0 !important;

      @media screen and (max-width: $header-break-point) and (min-width: $sm) {
        padding: 180px 0 0 !important;
      }

      @media screen and (max-width: $sm - 1) {
        padding: 0 !important;
      }
    }

    .v-overlay:before {
      background-color: #fff !important;
    }

    a {
      text-decoration: none;
    }

    ul {
      padding-left: 0;
      margin: 0;
      li {
        list-style: none;
      }
    }
  }

  body, html {
    margin: 0;
    padding: 0;
  }
</style>
