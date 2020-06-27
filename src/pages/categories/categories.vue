<template>
  <q-page padding>
    <h2>Coleção de categorias</h2>
    <div v-for="category in categoriesList" :key="category.id">
      <router-link :to="`/categories/${category.id}`">{{
        category.description
      }}</router-link>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState("categories", ["categories"]),
    ...mapGetters("categories",
      [
        "categoriesList"
      ])
  },
  name: 'Categories'
}
</script>
