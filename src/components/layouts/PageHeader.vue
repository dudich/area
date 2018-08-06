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
      </v-list>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import logo from '../../assets/area-logo.jpg'

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
  .v-toolbar {
    padding: {
      top: 15px;
      bottom: 15px;
    }
    background-color: #184556!important;
    z-index: 1000!important;

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
          color: #8cc63e;
        }

        &--active {
          color: #8cc63e!important;
        }
      }
    }
  }
</style>