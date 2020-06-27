<template>
  <q-page padding>
    <h2>Coleção de matérias primas</h2>
    <div v-for="raw in rawMaterialsList" :key="raw.id">
      <router-link :to="`/raws/${raw.id}`">{{
        raw.description
      }}</router-link>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState("raws", ["raws"]),
    ...mapGetters("raws",
    [
      "rawMaterialsList"
    ])
  },
  name: 'RawMaterials'
}
</script>
