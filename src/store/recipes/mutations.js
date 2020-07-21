import Vue from 'vue'

export function addNewRecipe(state, payload){
    console.log('Na mutation addNewRecipe')
    state.listOfRecipes.push(payload)
    // Vue.set(state.listOfRecipes, payload.id, payload.recipe)
}

