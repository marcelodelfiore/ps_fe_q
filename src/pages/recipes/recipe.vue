<template>
  <q-page padding>

    <div class="q-pa-md">
      <div class="row">
        <div class="col-12 text-h4 text-bold text-center q-pb-md">
          {{ recipeByID($route.params.id).title }}  
        </div>
      </div>
      
      <div class="q-pa-md row items-start q-gutter-md">
        <div class="q-pa-sm col-2 col-md-2 text-center" v-for="(ingredient, index) in recipeByID($route.params.id).ingredients"
            :key="index">         
              <q-card class="no-shadow">
                <q-img src="https://cdn.quasar.dev/img/mountains.jpg" 
                style="height: 75px; max-width: 75px"
                />
                <q-card-section>
                  <div class="text-h6">{{ (rawMaterialByID(ingredient.id)).description }} </div>
                  <div class="text-subtitle2">{{ (textureByID(ingredient.texture)).description }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  {{ ingredient.percent }}%    
                </q-card-section>
              </q-card>
        </div>
      
        <div class="q-pa-sm col-12 text-left" v-for="step in recipeByID($route.params.id).prep_steps"
          :key="step.seq">
            {{ step.seq }}
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
  name: 'Recipes'
}
</script>
