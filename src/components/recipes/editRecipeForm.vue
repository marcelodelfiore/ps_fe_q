<template>
    <div>
        <q-form
            @submit.prevent="onSubmit"
        >
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
            <div class="row"  v-for="(prepStep, index) in recipeToSubmit.prep_steps"
            :key="index">
                <div class="col q-pa-sm">
                    <q-input
                        filled
                        v-model="recipeToSubmit.prep_steps[index]"
                        label="Preparo"
                    />
                </div>
            </div>

            <!-- submit changes -->
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
                <q-btn round type="submit" icon="send" color="primary">
                    <q-tooltip content-style="font-size: 16px">
                        Salvar
                    </q-tooltip>
                </q-btn>
            </q-page-sticky>

        </q-form>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            shareOptionsLabels: ['Sim', 'Não'],
            ingredientPointer: 0,
            prepStepPointer: 0,
            recipeToSubmit: {}
        }
    },
    props: ['recipeID', 'recipeToEdit'],
    computed:{
        ...mapGetters('categories', ['categoriesList']),
        ...mapGetters('raws', ['rawMaterialByID', 'rawMaterialsList']),
        ...mapGetters('textures', ['textureByID', 'texturesList'])
    },
    methods: {
        ...mapActions('recipes', ['editRecipe']),
        onSubmit: function(){
            const payload= {
                id: this.recipeID,
                recipe: this.recipeToSubmit
            }
            this.editRecipe(payload)
        },
    }, 
    mounted() {
			this.recipeToSubmit = Object.assign({}, this.recipeToEdit)
		}
}
</script>
