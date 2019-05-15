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
              @click= null
              small >
              Uredi
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <v-btn
              dark
              class="grey darken-2"
              @click="deleteK(klijent.id)"
              small >
              Izbriši
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </panel>

    <div id="update" v-if="!isHidden">
      <panel title="Uredi Klijenta">
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
      >
      Spremi
    </v-btn>
    </panel>
      </div>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
var update = new Vue({
  el: '#update',
  data: {
    isHidden: true 
  }
})
</script>

<script>
import Panel from '@/components/Panel'
import KlijentService from '@/services/KlijentService'
export default{
  data () {
    return {
      klijent: {
        'naziv': null,
        'kontakt': null,
        'opis': null
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
      this.klijenti = (await KlijentService.index()).data
      } catch(err) {
        console.log(err)
      }
    },
    async deleteK(klijentId){
      try {
        await KlijentService.delete(klijentId);
        this.klijenti = (await KlijentService.index()).data
      }
      catch(err){
        console.log(err)
      }
    },
    hide(){
      
    }

  },
  components: {
    Panel
  },
}
</script>

<style scoped>
#update {
  margin-top: 15px;
}
</style>