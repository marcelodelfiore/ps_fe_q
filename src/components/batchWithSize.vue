<template>
    <div>
        <q-card>
            <q-card-section>
                <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="q-pa-sm col-12 text-left text-h6" v-for="(ingredient, index) in recipeByID($route.params.id).ingredients"
                 :key="index"
                 >
                    {{ (rawMaterialByID(ingredient.id)).description }},
                    {{ (textureByID(ingredient.texture)).description }},
                    {{ calculateWeight(ingredient.percent) }}
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="q-pa-sm col-12 text-left text-h6" v-for="step in recipeByID($route.params.id).prep_steps"
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
    data: function() {
        return{
            someNumber: 10
        }
    },
    props: {
        batchSize: Number
    },
    computed: {
        ...mapGetters('recipes', ['recipeByID']),
        ...mapGetters('raws', ['rawMaterialByID']),
        ...mapGetters('textures', ['textureByID'])
    },
    methods: {
        calculateWeight: function(percent){
            let mass_unit = 'kg';
            const percent_number = parseFloat(percent, 10)
            let weight_in_mass = (percent_number * this.batchSize)/100
            if (weight_in_mass < 1.0){
                weight_in_mass = weight_in_mass * 100
                mass_unit = 'grs'
            }
            const weight_string = weight_in_mass + ' ' + mass_unit
            return weight_string
        }
    }
}

</script>
