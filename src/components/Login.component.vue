<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person"
                          v-model="username"
                          name="username"
                          label="Username"
                          type="text"
                          data-vv-name="username">
            </v-text-field>
            <v-text-field prepend-icon="lock"
                          v-model="password"
                          name="password"
                          label="Password"
                          id="password"
                          type="password"
                          data-vv-name="password">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="submit" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthController from 'Controllers/auth.controller';

export default {
  name: 'Login',
   data() {
    return {
      username: '',
      password: '',
      registerErrors: [],
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      AuthController.login({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
