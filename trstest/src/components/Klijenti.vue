<template>
  <v-flex xs6 offset-xs3>
    <panel title="Klijenti">
      <div v-for="klijent in klijenti" 
      :key="klijent.id">
      <v-layout>
        <v-flex xs8>
          <div class="pt-2">
          {{klijent.naziv}} - 
          Broj Proizvoda : {{klijent.brojProizvoda}}    
          </div>
          </v-flex>
        <v-flex xs4>
            <v-btn 
              dark
              class="grey darken-2"
              @click="navigateTo({ name: 'klijenti', 
              params: { klijentId : klijent.id } })"
              small >
              Pregled
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </panel>
  </v-flex>
</template>

<script>
import KlijentService from '@/services/KlijentService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data() {
    return {
      klijenti: null
    }
  },
  async mounted() {
    this.klijenti = (await KlijentService.index()).data
  },
  methods:{
    navigateTo(route){
      this.$router.push(route)
    }
}
}
</script>
<style scoped>
</style>
