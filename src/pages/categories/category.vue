<template>
  <q-page padding>
    Specific Category Page !!!
    {{ categoryByID($route.params.id).description }}
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('categories', ['categoryByID'])
  },
  name: 'Categorie'
}
</script>
