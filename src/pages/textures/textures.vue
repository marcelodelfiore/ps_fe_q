<template>
  <q-page padding>
    <h2>Coleção de texturas</h2>
    <div v-for="texture in texturesList" :key="texture.id">
      <router-link :to="`/textures/${texture.id}`">{{
        texture.description
      }}</router-link>
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters("textures", ["texturesList"])
  },
  name: 'Textures'
}
</script>
