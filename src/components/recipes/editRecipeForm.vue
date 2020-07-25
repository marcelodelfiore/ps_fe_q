<template>
    <div>
        <div class="row">
            <div class="col q-ma-sm text-center text-h5 text-bold">
                Dados de identificação
            </div>

            <div class="col q-ma-sm text-center text-h5 text-bold">
                Ingredientes
            </div>

            <div class="col q-ma-sm text-center text-h5 text-bold">
                Preparações
            </div>
        </div>

        <div class="row">

            <div class="col q-ma-sm">
                <q-form
                    class="q-gutter-lg"
                >
                    <q-input
            
                    class="q-ma-lg"
                        filled
                        v-model="recipeToEdit.title"
                        :rules="[val => !!val || 'Campo obrigatório']"
                        label="Título"
                        ref="title" 
                    />
                            
                    <q-input
                        filled
                        class="q-ma-lg"
                        v-model="recipeToEdit.createdAt"
                        label="Data de criação"
                    >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date
                                    mask="DD/MM/YYYY"
                                    bordered
                                    v-model="recipeToEdit.createdAt"
                                    @input="() => $refs.qDateProxy.hide()"
                                />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                                            
                    <q-select
                    class="q-ma-lg"
                        filled
                        v-model="recipeToEdit.category"
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
                        v-model="recipeToEdit.private"
                        :rules="[val => !!val || 'Campo obrigatório']"
                        ref="shared"
                        label="Compartilhada ?"
                        :options="shareOptionsLabels"
                    />

                    <q-input
                    class="q-ma-lg"
                        filled
                        v-model="recipeToEdit.description"
                        label="Descrição" 
                    />
                </q-form>
            </div>

            <div class="col q-ma-sm">
                <q-form>
                   <q-select
                    class="q-pb-sm"
                    filled
                    v-model="recipeToEdit.ingredients[this.ingredientPointer].id"
                    label="Ingrediente"
                    :options="rawMaterialsList"
                    option-value="id"
                    option-label="description"
                    emit-value
                    map-options
                    /> 

                    <q-select
                    class="q-pb-sm"
                    filled
                    v-model="recipeToEdit.ingredients[this.ingredientPointer].texture"
                    label="Textura"
                    :options="texturesList"
                    option-value="id"
                    option-label="description"
                    emit-value
                    map-options
                    />

                    <q-input
                    class="q-pb-sm"
                    filled
                    v-model="recipeToEdit.ingredients[this.ingredientPointer].percent"
                    label="Quantidade (%)"
                    />
                </q-form>

                <div class="row q-pa-lg">
                    <q-btn round color="positive" icon="arrow_forward" @click="ingredientForward">
                        <q-tooltip content-style="font-size: 16px">
                            Próximo ingrediente
                        </q-tooltip>
                    </q-btn>
                    
                    <q-space/>

                    <q-btn type="submit" icon="publish" color="secondary">
                        <q-tooltip content-style="font-size: 16px">
                            Salvar ingredientes modificados
                        </q-tooltip>
                    </q-btn>
                </div>
            </div>
            
            <div class="col q-ma-sm">
                <q-form>
                    <q-input
                    class="q-pb-sm"
                    filled
                    v-model="recipeToEdit.prep_steps[this.prepStepPointer].seq"
                    label="Sequência"
                    />

                    <q-input
                    class="q-pb-sm"
                    filled
                    v-model="recipeToEdit.prep_steps[this.prepStepPointer].description"
                    label="Sequência"
                    />
                </q-form>                
                
                <div class="row q-pa-lg">
                    <q-btn round color="positive" icon="arrow_forward" @click="prepStepForward">
                        <q-tooltip content-style="font-size: 16px">
                            Próxima etapa de preparação
                        </q-tooltip>
                    </q-btn>
                    
                    <q-space/>

                    <q-btn type="submit" icon="publish" color="secondary">
                        <q-tooltip content-style="font-size: 16px">
                            Salvar preparações modificadas
                        </q-tooltip>
                    </q-btn>
                </div>
            </div>

        </div>

        <div class="row">
            <q-separator color="indigo-10" inset />
        </div>

        <div class="row q-ma-lg">
            <q-btn type="submit" icon="send" color="primary">
                <q-tooltip content-style="font-size: 16px">
                    Salvar modificações
                </q-tooltip>
            </q-btn>
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
            prepStepPointer: 0
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
    }
}
</script>
