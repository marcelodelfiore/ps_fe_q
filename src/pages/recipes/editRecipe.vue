<template>
    <div class="q-ma-md">
        <div class="row justify-around align-items:center">
            <div class="col q-pa-md text-center text-h4 text-bold">
                Editar Receita - {{ recipeByID(this.$route.params.id).recipe.title }}
            </div>
        </div>
        
        <div class="col q-pa-md justify-around">
            <editRecipeForm 
                :recipeID="this.$route.params.id"
                :recipeToEdit="recipeByID(this.$route.params.id).recipe"
            />
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import editRecipeForm from 'components/recipes/editRecipeForm'

export default {
    data() {
			return {
                recipeToSubmit: {}
			}
	},
    computed:{
        ...mapGetters('recipes', ['recipeByID'])
    },
    components: {
        editRecipeForm
    }
}
</script>