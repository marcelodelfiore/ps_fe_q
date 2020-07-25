<template>
    <div class="q-ma-md">
        <div class="row justify-around align-items:center">
            <div class="col q-pa-md text-center text-h4 text-bold">
                Editar Receita - {{ recipeByID(this.$route.params.id).recipe.title }}
            </div>
        </div>
        
        <div class="row">
            <div class="col q-pa-md justify-around">
                <editRecipeFormData 
                    :recipeToEdit="recipeByID(this.$route.params.id).recipe"
                />
            </div>

            <div class="col q-pa-md justify-around">
                <editRecipeFormIngredients :ingredientsToEdit="this.recipeToSubmit" />
            </div>

            <div class="col q-pa-md justify-around">
                <editRecipeFormPrepSteps :prepStepsToEdit="this.recipeByID" />
            </div>

        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import editRecipeFormData from 'components/recipes/editRecipeFormData'
import editRecipeFormIngredients from 'components/recipes/editRecipeFormIngredients'
import editRecipeFormPrepSteps from 'components/recipes/editRecipeFormPrepSteps'

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
        editRecipeFormData,
        editRecipeFormIngredients,
        editRecipeFormPrepSteps
    }
}
</script>