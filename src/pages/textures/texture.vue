<template>
  <q-page padding>
    Specific Texture Page !!!
    <h3>
      Página de textura específica {{ $route.params.id }} -
      {{ textureByID($route.params.id).description }}
    </h3>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapState } = createNamespacedHelpers("textures");

export default {
  computed: {
    ...mapState("textures", ["textures"]),
    ...mapGetters(["textureByID"], ["texturesList"])
  },
  name: 'Texture'
}
</script>
