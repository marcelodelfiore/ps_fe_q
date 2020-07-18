<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="text-h4 text-bold">
        Livro de Receitas
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center text-h4"
       v-for="thisRecipe in recipesCooked" :key="thisRecipe.id">
        <router-link :to="`/recipes/${recipe.id}`" style="">
          <q-card class="no-shadow">
            <q-card-section>
              <q-avatar size="200px">
                  <q-tooltip
                    max-width="200px"
                    anchor="top right"
                    content-class="bg-info text-black" 
                    content-style="font-size: 16px"
                    >
                    {{ thisRecipe.recipe.description }}
                  </q-tooltip>
                <img :src= "thisRecipe.recipe.thumbnail">
              </q-avatar>
            </q-card-section>
          </q-card>
        </router-link>
        <div class="text-h7">{{ thisRecipe.recipe.title }} </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("recipes", ["recipesCooked"])
  },
  name: 'Recipes'
}
</script>
