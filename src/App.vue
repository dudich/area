<template>
  <div id="app">
    <v-app>
      <v-toolbar app dark flat>
        <page-header></page-header>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
        <footer-banner></footer-banner>
      </v-content>
      <page-footer></page-footer>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from './components/layouts/PageHeader'
  import PageFooter from './components/layouts/PageFooter'
  import FooterBanner from './components/FooterBanner'

  export default {
    components: {
      PageHeader,
      PageFooter,
      FooterBanner
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
      padding: 110px 0 70px !important;
    }

    .v-overlay:before {
      background-color: #fff !important;
    }

    ul {
      padding: 0;
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
