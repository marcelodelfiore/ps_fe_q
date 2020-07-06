<template>
  <q-page padding>

    <div class="q-pa-md">
      <div class="row justify-center">
        <div class="text-h4 text-bold">
          {{ recipeByID($route.params.id).title }}
        </div>
      </div>
      <div class="row justify-center">
        <q-space/>
        <div class="col-3">
          <q-btn round color="orange-8" icon="build" class="q-mt-sm q-mb-lg" @click="showBatchSize = true">
            <q-tooltip >Criar novo lote de produto</q-tooltip>
          </q-btn>
        </div>

      </div>
      
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center text-h4" v-for="(ingredient, index) in recipeByID($route.params.id).ingredients"
            :key="index">         
          <q-card>
            <q-card-section>
              <q-img :src= "(rawMaterialByID(ingredient.id)).thumbnail"
              style="height: 150px; max-width: 150px"
              />
            </q-card-section>
            <q-card-section>
              <div class="text-h6">{{ (rawMaterialByID(ingredient.id)).description }} </div>
              <div class="text-h6">{{ (textureByID(ingredient.texture)).description }}</div>
            </q-card-section>

            <q-card-section class="text-h5 text-bold">
              {{ ingredient.percent }}%
            </q-card-section>
          </q-card>
        </div>

        <div class="q-pa-sm col-12 text-left text-h5" v-for="step in recipeByID($route.params.id).prep_steps"
          :key="step.seq">
          <div class="row">
            <div class="col-1">
              <q-icon name="directions_run"/>
            </div>
            
            <div class="col">
              {{ step.description }}
            </div>
          </div>              
        </div>
      </div>
    </div>
  <q-dialog v-model="showBatchSize"
    persistent
    full-width
  >
    <batchWithSize />
  </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import batchWithSize from 'components/batchWithSize'

export default {
  data() {
    return{
      showBatchSize: false
    }
  },
  components:{
    batchWithSize
  },
  computed: {
    ...mapGetters('recipes', ['recipeByID']),
    ...mapGetters('raws', ['rawMaterialByID']),
    ...mapGetters('textures', ['textureByID'])
  },
  name: 'Recipes'
}
</script>
