<template>
  <div>
    <panel title="Klijent Metadata">
      <v-text-field 
      label="Naziv"
      v-model="naziv">
      </v-text-field>
      <v-text-field 
      label="Kontakt"
      v-model="kontakt">
      </v-text-field>
      <v-text-field 
      label="Opis"
      v-model="opis">
      </v-text-field>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'

export default{
  data(){
    return{
      "naziv": null,
	    "kontakt": null,
	    "opis": null
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>