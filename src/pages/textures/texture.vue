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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('textures', ['textureByID'])
  },
  name: 'Textures'
}
</script>
