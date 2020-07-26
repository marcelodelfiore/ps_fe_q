<template>
    <div>
        <!-- general data -->
        <div class="row">
            <div class="col">
                <q-input
            
                    class="q-ma-lg"
                        filled
                        v-model="recipeToSubmit.title"
                        :rules="[val => !!val || 'Campo obrigatório']"
                        label="Título"
                        ref="title" 
                    />                
            </div>

            <div class="col">
                <q-input
                    filled
                    class="q-ma-lg"
                    v-model="recipeToSubmit.createdAt"
                    label="Data de criação"
                >
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date
                                mask="DD/MM/YYYY"
                                bordered
                                v-model="recipeToSubmit.createdAt"
                                @input="() => $refs.qDateProxy.hide()"
                            />
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

            <div class="col">
                <q-select
                class="q-ma-lg"
                    filled
                    v-model="recipeToSubmit.category"
                    :rules="[val => !!val || 'Campo obrigatório']"
                    ref="category"
                    label="Categoria"
                    :options="categoriesList"
                    option-value="id"
                    option-label="description"
                    emit-value
                    map-options
                />
            </div>

            <div class="col">
                <q-select
                    class="q-ma-lg"
                    filled
                    v-model="recipeToSubmit.private"
                    :rules="[val => !!val || 'Campo obrigatório']"
                    ref="shared"
                    label="Compartilhada ?"
                    :options="shareOptionsLabels"
                />
            </div>

            <div class="col">
                <q-input
                    class="q-ma-lg"
                    filled
                    v-model="recipeToSubmit.description"
                    label="Descrição" 
                />
            </div>

        </div>

        <div class="row">
            <q-separator color="indigo-10" inset />
        </div>
        
        <!-- ingredients -->
        
        <div class="row" v-for="(ingredient, index) in recipeToSubmit.ingredients"
         :key="index">
            <div class="col q-pa-sm">
                <q-select
                class="q-pb-sm"
                filled
                v-model="recipeToSubmit.ingredients[index].id"
                label="Ingrediente"
                :options="rawMaterialsList"
                option-value="id"
                option-label="description"
                emit-value
                map-options
                />
            </div>

            <div class="col q-pa-sm">
                <q-select
                class="q-pb-sm"
                filled
                v-model="recipeToSubmit.ingredients[index].texture"
                label="Textura"
                :options="texturesList"
                option-value="id"
                option-label="description"
                emit-value
                map-options
                />
            </div>

            <div class="col q-pa-sm">
                <q-input
                class="q-pb-sm"
                filled
                v-model="recipeToSubmit.ingredients[index].percent"
                label="Quantidade (%)"
                />
            </div>

        </div>

        <div class="row">
            <q-separator color="indigo-10" inset />
        </div>

        <!-- preparation steps -->
        <div class="row">
            <div class="col q-pa-sm">
                <q-input
                    filled
                    v-model="recipeToEdit.prep_steps.seq"
                    label="Sequência"
                />
            </div>
        
            <div class="col q-pa-sm">
                <q-input
                    filled
                    v-model="recipeToEdit.prep_steps.description"
                    label="Preparo"
                />
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            shareOptionsLabels: ['Sim', 'Não'],
            ingredientPointer: 0,
            prepStepPointer: 0,
            recipeToSubmit: {}
        }
    },
    props: ['recipeToEdit'],
    computed:{
        ...mapGetters('categories', ['categoriesList']),
        ...mapGetters('recipes', ['recipeByID']),
        ...mapGetters('raws', ['rawMaterialByID', 'rawMaterialsList']),
        ...mapGetters('textures', ['textureByID', 'texturesList'])
    },
    methods: {
        ingredientForward: function(){
            if(++this.ingredientPointer >= this.recipeToEdit.ingredients.length - 1)
                this.ingredientPointer = this.recipeToEdit.ingredients.length - 1
        },
        prepStepForward: function(){
            if(++this.prepStepPointer >= this.recipeToEdit.prep_steps.length - 1)
                this.prepStepPointer = this.recipeToEdit.prep_steps.length - 1
        }
    }, 
    mounted() {
			this.recipeToSubmit = Object.assign({}, this.recipeToEdit)
		}
}
</script>
