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
    ...mapGetters("recipes", ["recipesList"])
  },
  name: 'Recipes'
}
</script>
