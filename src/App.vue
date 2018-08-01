<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
