<template>
    <div class="col-lg-5">
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

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            shareOptionsLabels: ['Sim', 'Não']
        }
    },
    props: ['recipeToEdit'],
    computed:{
        ...mapGetters('categories', ['categoriesList']),
        ...mapGetters('recipes', ['recipeByID']),
    },
    methods:{
    }
}
</script>
