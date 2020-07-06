<template>
    <div>
        <q-card>
            <q-card-section>
                <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div v-for="(ingredient, index) in recipeByID($route.params.id).ingredients" :key="index">
                    <div class="text-h6">   {{ (rawMaterialByID(ingredient.id)).description }},
                                            {{ (textureByID(ingredient.texture)).description }},
                                            {{ ingredient.percent }} %
                    </div>
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="q-pa-sm col-12 text-left text-h5" v-for="step in recipeByID($route.params.id).prep_steps"
                :key="step.seq"
                >
                    {{ step.description }}
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
    ...mapGetters('recipes', ['recipeByID']),
    ...mapGetters('raws', ['rawMaterialByID']),
    ...mapGetters('textures', ['textureByID'])
    }
}

</script>

<style>

</style>