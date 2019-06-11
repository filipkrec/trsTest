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
              @click="hide(klijent)"
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
    <transition name="fade" mode="out-in">
    <div id="update" key="3" v-if="!isHidden" >
      <panel title="Uredi Klijenta">
      <v-text-field
      label="Naziv"
      required
      :rules = "[required]"
      v-model="klijentUpdate.naziv">
      </v-text-field>
      <v-text-field
      label="Kontakt"
      v-model="klijentUpdate.kontakt">
      </v-text-field>
      <v-text-field
      label="Opis"
      multi-line
      v-model="klijentUpdate.opis">
      </v-text-field>
    <v-btn 
      dark
      class="grey darken-2 xs-right"
      @click="update()"
      >
      Spremi
    </v-btn>
    </panel>
    </div>
    </transition>
    </v-flex>
  </v-layout>
  </div>
</template>

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
      klijentUpdate: {
        'id': null,
        'naziv': null,
        'kontakt': null,
        'opis': null
      },
      klijenti: null,
      isHidden: true,
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
    hide(klijent){
      if(this.isHidden != false)
      this.isHidden = false

      this.klijentUpdate.id = klijent.id;
      this.klijentUpdate.naziv = klijent.naziv;
      this.klijentUpdate.opis = klijent.opis;
      this.klijentUpdate.kontakt = klijent.kontakt;
    },
    update(){
      if(this.isHidden != true)
      this.isHidden = true
      updateClient()
    },
    async updateClient(){
    try {
        await KlijentService.update(this.klijentUpdate)
        this.klijentUpdate.kontakt = ""
        this.klijentUpdate.naziv = ""
        this.klijentUpdate.opis= ""
        this.klijentUpdate.id = ""
        this.klijenti = (await KlijentService.index()).data
      }
      catch(err){
        console.log(err)
      }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
</style>