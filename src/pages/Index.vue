<template>
  <div>
    <div class="row text-center q-ma-lg q-pa-lg">
      <div class="col text-h4">
        Benvindos ao <strong>Porksmith</strong> !!!
      </div>
    </div>
    
    <div class="row text-center q-ma-lg q-pa-lg">
      <div class="col text-h6">
        O Porksmith foi criado para que você possa dedicar-se à elaboração e aprimoramento de suas receitas,
        deixando o trabalho repetitivo e mecânico por nossa conta.
        <br>
        <br>
        Esperamos que gostem e se tiverem sugestões, não hesitem em contatar-nos usando nossas redes sociais.
        <br>
        <br>
        <br>
        <br>
        Divirtam-se !!!!
      </div>
    </div>

    <div class="row text-center q-my-lg">
      <div class="col">
        <q-img src="logotipo_porksmith.png"
        style="height: 310px; max-width: 600px"
        />
      </div>
    
    </div>

    <div class="row text-center">   
      <div class="col">
        <q-btn size="xl" @click="openExternalURL('https://www.facebook.com/porksmithApp')"
          icon="img:/icons/facebook.svg" flat
        />
      </div>
      <div class="col">
        <q-btn size="xl" @click="openExternalURL('https://www.instagram.com/porksmithApp')"
          icon="img:/icons/instagram.svg" flat
        />
      </div>
      <div class="col">
        <q-btn size="xl" @click="openExternalURL('https://www.youtube.com/channel/UCNw9nb_mmUYsSwsh0O6oXvw')"
          icon="img:/icons/youtube.svg" flat
        />
      </div>
      <div class="col">
        <q-icon name="email" color="blue" size="xl">
          <q-tooltip
            content-class="bg-indigo-1 text-black" 
            content-style="font-size: 16px">porksmithapp@gmail.com
          </q-tooltip>
        </q-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar'

export default {
  methods:{
    openExternalURL(url){
      openURL(url)
    }
  },
  name: 'PageIndex'
}
</script>
