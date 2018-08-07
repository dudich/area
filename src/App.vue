<template>
  <div id="app">
    <v-app>
      <v-toolbar app dark flat>
        <page-header></page-header>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from './components/layouts/PageHeader'

  export default {
    components: {
      PageHeader
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Varela', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .container {
    padding: 0;
  }

  .v-content {
    padding: 110px 0 32px!important;
    background-color: #164755;
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
