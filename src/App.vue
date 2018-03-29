<template>
  <v-app dark>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar app>
      <v-toolbar-title>VueBoilerplate</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
               v-if="admin"
               v-for="item in toolbarItems['admin']"
               :key="item.text"
               :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
        <v-btn flat
               v-for="item in toolbarItems[authStatus]"
               :key="item.text"
               :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      toolbarItems: {
        'loggedIn': [{ icon: 'exit_to_app', text: 'Logout', path: '/logout' }],
        'loggedOut': [
          { icon: 'lock_open', text: 'Login', path: '/login' },
          { icon: 'lock', text: 'Register', path: '/register' },
        ],
        'admin': [{ icon: 'lock', text: 'AdminPanel', path: '/home' }],
      },
    };
  },
  computed: {
    ...mapGetters([
      'activeUser',
      'admin',
    ]),
    authStatus() {
      return this.activeUser ? 'loggedIn' : 'loggedOut';
    },
  },

};
</script>
