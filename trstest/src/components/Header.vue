<template>
  <v-toolbar fixed class="grey darken-2" dark>
    <v-toolbar-title class="mr-4">
      Title
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({ name: 'HelloWorld' })">
        Home     
      </v-btn>  
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="navigateTo({ name: 'adminKlijenata' })">
        Administracija klijenata
      </v-btn>      
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn" @click="navigateTo({ name: 'login' })">
        Admin Login
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLoggedIn" @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default{
  methods:{
    navigateTo(route){
      this.$router.push(route)
    },
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name:'root'
      })
    }
  }
}
</script>

<style scoped>
</style>