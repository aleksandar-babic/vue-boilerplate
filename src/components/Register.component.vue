<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
            <v-form @submit="submit">
              <v-text-field prepend-icon="person"
                            v-model="username"
                            name="username"
                            label="Username"
                            type="text"
                            data-vv-name="username"
                            required>
              </v-text-field>
              <v-text-field prepend-icon="lock"
                            v-model="password"
                            name="password"
                            label="Password"
                            type="password"
                            data-vv-name="password"
                            required>
              </v-text-field>
              <p v-for="(error, index) in registerErrors"
                :key="index"
                class="register-errors">
                {{ error }}
              </p>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="submit" color="primary">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthController from 'Controllers/auth.controller';

export default {
  name: 'register',
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
      AuthController.register({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style>
.register-errors {
  color: red;
}
</style>
