<template>
  <v-app>
    <v-flex xs4 offset-sm4>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="grey darken-2">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"></v-text-field>
            <br/>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"></v-text-field>
          <div v-html="error" class="error" />
          <br/>
        <v-btn
          dark
          class="grey darken-2" 
          @click="login">Log in
        </v-btn>
        </div>
      </div>
    </v-flex>
  </v-app>
</template>
<script>

import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error){
        this.error = error.response.data.error
      }
      this.$router.push("adminKlijenata")
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: black;
}
</style>
