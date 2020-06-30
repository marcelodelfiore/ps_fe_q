<template>
  <q-page padding>
    Specific Recipe Page !!! - {{ recipeByID($route.params.id).title }}

    <div
      v-for="(ingredient, index) in recipeByID($route.params.id).ingredients"
      :key="index"
    >
      {{ (rawMaterialByID(ingredient.id)).description }}
      {{ (textureByID(ingredient.texture)).description }}
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
