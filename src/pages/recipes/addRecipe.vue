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
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-lg"
                >
                    <q-input
                    class="q-ma-lg"
                        standout
                        v-model="recipeToSubmit.title" 
                        label="Título" 
                    />
                    
                    <q-input
                        filled
                        class="q-ma-lg"
                        mask="date"
                        v-model="recipeToSubmit.createdAt"
                        label="Data de criação"
                    >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date
                                    bordered
                                    v-model="recipeToSubmit.createdAt"
                                    @input="() => $refs.qDateProxy.hide()"
                                />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                                    
                    <q-input
                    class="q-ma-lg"
                        standout
                        v-model="recipeToSubmit.category"
                        label="Categoria" 
                    />

                    <q-input
                    class="q-ma-lg"
                        standout
                        v-model="recipeToSubmit.private"
                        label="Compartilhada ?" 
                    />

                    <q-input
                    class="q-ma-lg"
                        standout
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
                                    Apagar o conteúdo preenchido
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            recipeToSubmit: {
                title: '',
                id: '',
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
            showIngredientsDialog: false
        }
    },
    methods: {
        onSubmit () {
            this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Enviado'
            })
        },
        onReset () {
            this.recipeToSubmit.title = null
            this.recipeToSubmit.createdAt = null,
            this.recipeToSubmit.category = null,
            this.recipeToSubmit.private = null,
            this.recipeToSubmit.description = null,
            this.recipeToSubmit.ingredients = [],
            this.recipeToSubmit.prep_steps = []
        }
  }
}
</script>
