<template>
  <q-page padding>
    Specific Recipe Page !!! - {{ recipeByID($route.params.id).title }}

    <div
      v-for="(ingredient, index) in recipeByID($route.params.id).ingredients"
      :key="index"
    >
      {{ rawMaterialByID(ingredient.id).description }}
      {{ ingredient.texture }}
      {{ ingredient.percent }}
    </div>
    <hr />
    <div
      v-for="step in recipeByID($route.params.id).prep_steps"
      :key="step.seq"
    >
      {{ step.seq }}
      {{ step.description }}
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState("recipes",["recipes"]),
    ...mapGetters("recipes",
     [
       "recipeByID"
    ]),
    ...mapGetters("raws", ["rawMaterialByID"]),
    ...mapGetters("textures", ["textureByID"])
  },
  name: 'Recipe'
}
</script>
