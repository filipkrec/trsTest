<template>
  <v-flex xs6 offset-xs3>
    <panel title="Klijenti">
      <div v-for="klijent in klijenti" 
      :key="klijent.id">
      {{klijent.naziv}} - 
      Broj Proizvoda : {{klijent.brojProizvoda}}
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
  }
}
</script>
<style scoped>
</style>
