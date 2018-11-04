<template>
  <v-layout>
    <v-flex xs6>
      <panel :title="klijent.naziv">
        <div>
          Kontakt: {{klijent.kontakt}} <br/>
          Opis: {{klijent.opis}} <br/>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import KlijentService from '@/services/KlijentService'
import Panel from '@/components/Panel'

export default {
  data(){
    return{
      klijent: null
    }
  },
  async mounted() {
    const klijentId = this.$store.state.route.params.klijentId
    this.klijent = (await KlijentService.show(klijentId)).data
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>