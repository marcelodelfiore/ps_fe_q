<template>
    <div class="q-pa-md">
        
        <div class="row" style="background-color: white">
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
            >
                <q-tab name="ingredients" icon="img:icons/grocery.svg" label="Ingredientes" />
                <q-tab name="sequence" icon="img:icons/preparations.svg" label="Preparo" />
            </q-tabs>

            <q-separator />
            
            <q-tab-panels v-model="tab" animated>
                
                <q-tab-panel name="ingredients">
                    <q-list bordered padding style="background-color: white">
                        <q-item class="q-pa-sm" 
                        v-for="(ingredient, index) in recipeByID($route.params.id).recipe.ingredients"
                            :key="index"
                            v-ripple
                            clickable
                        >
                            <q-item-section>
                                <q-item-label> {{ calculateWeight(ingredient.percent) }} de
                                    {{ (rawMaterialByID(ingredient.id)).description }}
                                    {{ (textureByID(ingredient.texture)).description }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-tab-panel>

                <q-tab-panel name="sequence">
                    <q-list bordered padding style="background-color: white">
                        <q-item class="q-pa-sm" v-for="step in recipeByID($route.params.id).recipe.prep_steps"
                        :key="step.seq"
                        v-ripple
                        clickable
                        >                          
                            <q-item-section>
                                <q-item-label>{{ step.description }} </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-tab-panel>
            
            </q-tab-panels>
        
            <q-btn class="fixed-bottom q-pa-lg q-ma-lg" label="Fechar" v-close-popup color="red" style="background-color: white"/>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    data: function() {
        return{
            someNumber: 10,
            tab: 'ingredients'
        }
    },
    props: {
        batchSize: String
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
            let weight_in_mass = ((percent_number * parseFloat(this.batchSize))/100)
            if (weight_in_mass < 1.0){
                weight_in_mass = weight_in_mass * 1000
                weight_in_mass = this.roundNumbers(weight_in_mass, 1)
                mass_unit = 'grs'
            }
            else{
                weight_in_mass = this.roundNumbers(weight_in_mass, 2)
            }
            const weight_string = weight_in_mass + ' ' + mass_unit
            return weight_string
        },
        roundNumbers: function (value, decimals){
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
        }
    }
}

</script>
