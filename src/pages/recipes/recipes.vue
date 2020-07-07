<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="text-h4 text-bold">
        Coleção de Receitas
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center text-h4" v-for="recipe in recipesList" :key="recipe.id">
        <router-link :to="`/recipes/${recipe.id}`" style="">
          <q-card class="no-shadow">
            <q-card-section>
              <q-avatar size="350px">
                <img :src= "recipe.thumbnail">
              </q-avatar>
            </q-card-section>
          </q-card>
        </router-link>
        <div class="text-h7">{{ recipe.title }} </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("recipes", ["recipesList"])
  },
  name: 'Recipes'
}
</script>
