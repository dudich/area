<template>
  <v-toolbar app class="page-header">
    <div class="logo">
      <img src="../../assets/area-logo.png" alt="logo">
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
  export default {
    name: 'page-header',

    data() {
      return {
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
    background-color: #164755!important;

    .logo {
      width: 200px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
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