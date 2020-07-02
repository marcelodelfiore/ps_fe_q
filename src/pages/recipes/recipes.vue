<template>
  <q-page padding>
   <h2>Livro de Receitas</h2>
    <div class="q-pa-sm col-sm-2 text-center" v-for="recipe in recipesList" :key="recipe.id">
      <router-link :to="`/recipes/${recipe.id}`">
        <q-card class="no-shadow">
          <q-card-section>
            <q-img :src= "recipe.thumbnail"
            style="height: 200px; max-width: 200px"
            />
          </q-card-section>
            <q-card-section>
              <div class="text-h7">{{ recipe.title }} </div>
            </q-card-section>
        </q-card>
      </router-link>
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
