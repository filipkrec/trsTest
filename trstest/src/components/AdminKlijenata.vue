<template>
  <div>
  <v-layout>
    <v-flex xs4>
    <panel title="Klijent">
      <v-text-field 
      label="Naziv"
      required
      :rules = "[required]"
      v-model="klijent.naziv">
      </v-text-field>
      <v-text-field 
      label="Kontakt"
      v-model="klijent.kontakt">
      </v-text-field>
      <v-text-field 
      label="Opis"
      multi-line
      v-model="klijent.opis">
      </v-text-field>
    <v-btn
      dark
      class="grey darken-2"
      @click="create">
      Dodaj klijenta
    </v-btn>    
    </panel>
    </v-flex>
    <v-flex xs2></v-flex>
    <v-flex xs6>
    <panel title="Klijenti">
      <div v-for="klijent in klijenti" 
      :key="klijent.id">
      <v-layout>
      <v-flex xs6>
          <div class="pt-2">
          {{klijent.naziv}} - 
          Broj Proizvoda : {{klijent.brojProizvoda}}    
          </div>
          </v-flex>
        <v-flex xs3>
            <v-btn 
              dark
              class="grey darken-2"
              @click="navigateTo({ name: 'klijenti', 
              params: { klijentId : klijent.id } })"
              small >
              Uredi
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <v-btn 
              dark
              class="grey darken-2"
              @click="navigateTo({ name: 'klijenti', 
              params: { klijentId : klijent.id } })"
              small >
              Izbriši
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </panel>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import KlijentService from '@/services/KlijentService'
export default{
  data(){
    return{
      klijent: {
      "naziv": null,
	    "kontakt": null,
	    "opis": null
      },
      klijenti: null,
      required: (value) => !!value || 'Obavezno polje'
    } 
  }, 
  async mounted() {
    this.klijenti = (await KlijentService.index()).data
  },
  methods: {
    async create(){
      if(!this.klijent.naziv) return
      try{
      await KlijentService.post(this.klijent)
      this.klijent.kontakt = ""
      this.klijent.naziv = ""
      this.klijent.opis= ""
      } catch(err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>