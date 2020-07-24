<template>
    <div class="q-ma-md">
        <div class="row justify-around align-items:center">
            <div class="col q-pa-md text-center text-h4 text-bold">
                Editar Receita - {{ recipeToSubmit.recipe.title }}
            </div>
        </div>
        
        <div class="row">
            <div class="col q-pa-md justify-around">
                form dos dados de cadastro
            </div>

            <div class="col q-pa-md justify-around">
                form dos dados de ingredientes
            </div>

            <div class="col q-pa-md justify-around">
                {{ recipeToSubmit }}
            </div>

        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
			return {
                recipeToSubmit: {}
			}
	},
    computed:{
        ...mapGetters('recipes', ['recipeByID'])
    },
    mounted() {
      this.recipeToSubmit = Object.assign({}, this.recipeByID(this.$route.params.id))
    }
}
</script>