import Vue from 'vue'

export function addNewRecipe(state, payload){
    Vue.set(state.list_of_recipes, payload.id, payload.recipe)
}

