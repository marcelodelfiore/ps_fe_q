<template>
    <div class="q-pa-md">
        <div class="row justify-around">
            <div class="col-lg-3 col-md-1">
            </div>
            
            <div class="col-lg-5">
            </div>
            
            <div class="col-lg-3 col-md-1">
            </div>
        </div>

        <div class="row  justify-around">
            <div class="col-lg-3 col-md-1">
            </div>
            
            <div class="col-lg-5">
                <q-form
                    @submit.prevent="onSubmit"
                    @reset="onReset"
                    class="q-gutter-lg"
                >
                    <q-input
                    class="q-ma-lg"
                        filled
                        v-model="recipeToSubmit.title"
                        :rules="[val => !!val || 'Campo obrigatório']"
                        label="Título"
                        ref="title" 
                    />
                    
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

                    <q-select
                    class="q-ma-lg"
                        filled
                        v-model="shareOptions"
                        :rules="[val => !!val || 'Campo obrigatório']"
                        ref="shared"
                        label="Compartilhada ?"
                        :options="shareOptionsLabels"
                    />

                    <q-input
                    class="q-ma-lg"
                        filled
                        v-model="recipeToSubmit.description"
                        label="Descrição" 
                    />

                    <div class="row items-center">
                        <div class="col q-ma-lg">
                            <q-btn 
                                color="grey-4"
                                @click="showIngredientsDialog = !showIngredientsDialog"
                            >
                                <q-tooltip content-style="font-size: 16px">
                                    Detalhar ingredientes & preparação
                                </q-tooltip>
                                <q-icon name="img:icons/grocery.svg"></q-icon>
                            </q-btn>
                        </div>
                        
                        <div class="col q-ma-lg">
                            <q-btn type="submit" color="primary">
                                <q-tooltip content-style="font-size: 16px">
                                    Salvar a receita
                                </q-tooltip>
                                <q-icon name="send"></q-icon>
                            </q-btn>
                        </div>

                        <div class="col q-ma-lg">
                            <q-btn type="reset" color="negative" class="q-ml-sm">
                                <q-tooltip content-style="font-size: 16px">
                                    Limpar formulário
                                </q-tooltip>
                                <q-icon name="delete_forever"></q-icon>
                            </q-btn>
                        </div>
                    </div>

                </q-form>
            </div>
            
            <div class="col-lg-3 col-md-1">
            </div>
        </div>

        <q-dialog 
            v-model="showIngredientsDialog"
            persistent
            full-width
        >
            <div class="q-pa-md q-gutter-sm">
                <div class="row" style="background-color: white">
                    <div class="col-6 q-pa-md">
                        <q-tabs
                            v-model="tab"
                            inline-label
                            class="bg-primary text-white shadow-2"
                        > 
                            <q-tab name="ingredients" icon="img:icons/grocery.svg" label="Ingredientes" />
                            <q-tab name="preps" icon="img:icons/preparations.svg" label="Preparo" />               

                        </q-tabs>
                        
                        <q-separator />
                    
                        <q-tab-panels v-model="tab" animated>
                        
                            <q-tab-panel name="ingredients">
                                form de ingredientes
                                <q-form 
                                    @submit.prevent="onSubmitIngredients"
                                    @reset="onResetIngredients"
                                    class="q-gutter-lg">
                                    
                                    <q-select
                                        class="q-ma-lg"
                                        filled
                                        v-model="ingredientToInput"
                                        label="Ingrediente"
                                        :options="rawMaterialsList"
                                        option-value="id"
                                        option-label="description"
                                        emit-value
                                        map-options
                                    />

                                    <q-select
                                        class="q-ma-lg"
                                        filled
                                        v-model="textureToInput"
                                        label="Textura"
                                        :options="texturesList"
                                        option-value="id"
                                        option-label="description"
                                        emit-value
                                        map-options
                                    />

                                    <q-input
                                        class="q-ma-lg"
                                        filled
                                        v-model="quantityToInput"
                                        label="Quantidade (%)"
                                    />
                                    
                                    <q-input
                                        class="q-ma-lg"
                                        filled
                                        v-model="ingredientSequenceToInput"
                                        label="Sequência"
                                    />
                                    
                                    <q-btn type="submit" icon="send" color="primary">
                                        <q-tooltip content-style="font-size: 16px">
                                            Salvar ingrediente
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn type="reset" icon="delete_forever" color="negative" class="q-ml-sm">
                                        <q-tooltip content-style="font-size: 16px">
                                            Limpar formulário
                                        </q-tooltip>
                                    </q-btn>
                                </q-form>
                            </q-tab-panel>

                            <q-tab-panel name="preps">
                                form de preparo
                                <q-form 
                                    @submit.prevent="onSubmitPrepSteps"
                                    @reset="onResetPrepSteps"
                                    class="q-gutter-lg">
                                    
                                    <q-input
                                        class="q-ma-lg"
                                        filled
                                        v-model="sequenceToInput"
                                        label="Sequência"
                                    />

                                    <q-input
                                        class="q-ma-lg"
                                        filled
                                        v-model="prepStepToInput"
                                        label="Procedimento"
                                    />
                                    <q-btn type="submit" icon="send" color="primary">
                                        <q-tooltip content-style="font-size: 16px">
                                            Salvar preparo
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn type="reset" icon="delete_forever" color="negative" class="q-ml-sm">
                                        <q-tooltip content-style="font-size: 16px">
                                            Limpar formulário
                                        </q-tooltip>
                                    </q-btn>
                                </q-form>
                            </q-tab-panel>

                        </q-tab-panels>
                    </div>

                    <div class="col-3 q-pa-md text-center">
                        <h6><strong>Ingredientes adicionados</strong></h6>
                        <div v-for="ingredient in recipeToSubmit.ingredients" :key="ingredient.sequence">
                            {{ ingredient.sequence }} - {{ (rawMaterialByID(ingredient.id)).description }}; {{ ingredient.percent }}%;
                             {{ (textureByID(ingredient.texture)).description }}
                        </div>
                    </div>

                    <div class="col-3 q-pa-md text-center">
                        <h6><strong>Preparos adicionados</strong></h6>
                        <div v-for="prepStep in recipeToSubmit.prep_steps" :key="prepStep.seq">
                            {{ prepStep.seq }} - {{ prepStep.description }}
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                    </div>

                    <div class="col">
                        <q-btn label="Fechar" color="primary" v-close-popup />
                    </div>

                    <div class="col">
                    </div>
                </div>
            </div>
        </q-dialog>


    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import { firebaseAuth } from 'boot/firebase'

import { categoriesList } from '../../store/categories/getters'
import { rawMaterialsList, rawMaterialByID } from '../../store/raws/getters'
import { texturesList, textureToInput } from '../../store/textures/getters'

export default {
    data(){
        return{
            recipeToSubmit: {
                title: '',
                createdAt: '',
                category: '',
                thumbnail: '',
                ingredients: [],
                private: '',
                sample: false,
                author: '',
                description: '',
                prep_steps: []
            },
            showIngredientsDialog: false,
            tab: 'ingredients',
            ingredientToInput: '',
            textureToInput: '',
            quantityToInput: 1.0,
            ingredientSequenceToInput: 1,
            sequenceToInput: 1,
            prepStepToInput: '',
            shareOptions: null,
            shareOptionsLabels: ['Sim', 'Não']
        }
    },
    computed: {
        ...mapGetters('categories', ['categoriesList']),
        ...mapGetters('raws', ['rawMaterialsList', 'rawMaterialByID']),
        ...mapGetters('textures', ['texturesList', 'textureByID']),
        ...mapState('auth', ['currentLoggedUser'])
    },
    methods: {
        ...mapActions('recipes', ['addNewRecipe']),
        onSubmit() {
            this.recipeToSubmit.author = firebaseAuth.currentUser.uid
            

            if(this.shareOptions == 'Sim'){
                this.recipeToSubmit.private = true
            }
            else{
                this.recipeToSubmit.private = false
            }

            this.submitNewRecipe()
        },
        onReset() {
            this.recipeToSubmit.title = null
            this.recipeToSubmit.createdAt = null
            this.recipeToSubmit.category = null
            this.recipeToSubmit.private = null
            this.recipeToSubmit.description = null
            this.recipeToSubmit.ingredients = []
            this.recipeToSubmit.prep_steps = []
        },
        submitNewRecipe(){
            this.addNewRecipe(this.recipeToSubmit)
        },
        onSubmitIngredients() {
            const new_ingredient= {
                id: this.ingredientToInput,
                percent: this.quantityToInput,
                texture: this.textureToInput,
                sequence: this.ingredientSequenceToInput
            }
            this.recipeToSubmit.ingredients.push(new_ingredient)
            this.onResetIngredients()
        },
        onResetIngredients() {
            this.ingredientToInput = null
            this.textureToInput = null
            this.quantityToInput = null
            this.ingredientSequenceToInput = null
            
        },
        onSubmitPrepSteps() {
            const new_prepStep = {
                seq: this.sequenceToInput,
                description: this.prepStepToInput
            }
            this.recipeToSubmit.prep_steps.push(new_prepStep)
            this.onResetPrepSteps()
        },
        onResetPrepSteps() {
            this.sequenceToInput = null
            this.prepStepToInput = null
            
        }

    }
}
</script>
