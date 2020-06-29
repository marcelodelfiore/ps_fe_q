<template>
  <q-page padding>
    Specific Raw Materials Page !!!
    <h3>Página de matéria prima específica {{ $route.params.id }}</h3>
    {{ rawMaterialByID($route.params.id).description }}

  </q-page>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapState } = createNamespacedHelpers("raws");

export default {
  computed: {
    ...mapState(["raw_materials"]),
    ...mapGetters(["rawMaterialByID"])
  },
  name: 'RawMaterial'
}
</script>
