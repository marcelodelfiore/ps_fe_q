import Vue from 'vue'

export function addNewRecipe(state, payload){
    state.listOfRecipes.push(payload)
    // Vue.set(state.listOfRecipes, payload.id, payload.recipe)
}

