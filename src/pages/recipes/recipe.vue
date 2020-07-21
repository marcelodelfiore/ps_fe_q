<template>
  <q-page padding>

    <div class="q-pa-md">
      <div class="row justify-center">
        <div class="text-h4 text-bold">
          {{ recipeByID($route.params.id).recipe.title }}
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-3">
        </div>
        <q-space/>
        <div class="col-1 q-gutter-md q-mx-md">
          <q-input rounded outlined v-model="batchSize" >
            <template v-slot:prepend>
              <q-tooltip 
              content-style="font-size: 16px"
              >
                Kg
              </q-tooltip>
            </template>
          </q-input>
        </div>
        
        <div class="col-1">
          <q-btn round color="red" icon="restaurant" class="q-mt-sm q-mb-lg" @click="showBatchSize = true">
            <q-tooltip 
            content-style="font-size: 16px"
            >
            Criar novo lote de produto</q-tooltip>
          </q-btn>
        </div>

      </div>
      
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center text-h4"
         v-for="ingredient in recipeByID($route.params.id).recipe.ingredients"
         :key="ingredient.sequence">         
          <q-card class="no-shadow">
            <q-card-section>
              <q-avatar size="150px">
                <img :src= "(rawMaterialByID(ingredient.id)).thumbnail">
              </q-avatar>
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

        <div>
          <q-separator color="orange" inset />
        </div>

        <div class="q-pa-sm col-12 text-left text-h5" v-for="step in recipeByID($route.params.id).recipe.prep_steps"
          :key="step.seq">
          <div class="row">
            <div class="col-1">
              {{ step.seq }}
              <!-- <q-icon name="directions_run"/> -->
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
  >
    <batchWithSize :batchSize="batchSize" />
  </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import batchWithSize from 'components/batchWithSize'

export default {
  data() {
    return{
      showBatchSize: false,
      batchSize: '1.0'
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
