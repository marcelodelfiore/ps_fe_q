<template>
  <q-page padding>
    Specific Raw Materials Page !!!
    <h3>Página de matéria prima específica {{ $route.params.id }}</h3>
    {{ rawMaterialByID($route.params.id).description }}
    <q-img
      :src="rawMaterialByID($route.params.id).thumbnail"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('raws', ["rawMaterialByID"])
  },
  name: 'RawMaterial'
}
</script>
