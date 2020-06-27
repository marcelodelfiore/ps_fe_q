<template>
  <q-page padding>
    Specific Category Page !!!
    {{ categoryByID($route.params.id).description }}
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapState } = createNamespacedHelpers("categories");

export default {
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["categoryByID", "categoriesList"])
  },
  name: 'Categorie'
}
</script>
