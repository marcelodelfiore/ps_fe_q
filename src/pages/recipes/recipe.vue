<template>
  <q-page padding>

    <div class="q-pa-md">
      <div class="row">
        <div class="col-6 text-h4 text-bold text-center">
          {{ recipeByID($route.params.id).title }}  
        </div>

        <div class="col-6 text-h3 text-bold text-center">
          <q-btn round color="primary" icon="build" class="q-mt-md" @click="newBatch">
            <q-tooltip >Criar novo lote de produto</q-tooltip>
          </q-btn>  
        </div>

      </div>
      
      <div class="q-pa-md row items-start q-gutter-md">
        <div class="q-pa-sm col-2 col-md-2 text-center" v-for="(ingredient, index) in recipeByID($route.params.id).ingredients"
            :key="index">         
              <q-card class="no-shadow">
                <q-card-section>
                  <q-img :src= "(rawMaterialByID(ingredient.id)).thumbnail"
                  style="height: 75px; max-width: 75px"
                  />
                </q-card-section>
                <q-card-section>
                  <div class="text-h6">{{ (rawMaterialByID(ingredient.id)).description }} </div>
                  <div class="text-subtitle2">{{ (textureByID(ingredient.texture)).description }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  {{ ingredient.percent }}%    
                </q-card-section>
              </q-card>
        </div>


        <div class="q-pa-sm col-12 text-left text-h5" v-for="step in recipeByID($route.params.id).prep_steps"
          :key="step.seq">
            <strong>{{ step.seq }}</strong>
            {{ step.description }}
        </div>
      
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('recipes', ['recipeByID']),
    ...mapGetters('raws', ['rawMaterialByID']),
    ...mapGetters('textures', ['textureByID'])
  },
  methods: {
    newBatch: function() {
      alert("Criar um novo lote de produtos")
    }
  },
  name: 'Recipes'
}
</script>
