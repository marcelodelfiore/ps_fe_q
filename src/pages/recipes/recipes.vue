<template>
  <q-page padding>
   <h2>Livro de Receitas</h2>
    <div v-for="recipe in recipesList" :key="recipe.id">
      <router-link :to="`/recipes/${recipe.id}`">{{
        recipe.title
      }}</router-link>
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState("recipes", ["recipes"]),
    ...mapGetters("recipes", 
    [
      "recipesList",
      "recipesDefumados",
      "recipesCurados",
      "recipesFrescos",
      "recipesMaturados"
    ])
  },
  name: 'Recipes'
}
</script>
