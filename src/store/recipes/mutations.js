import Vue from 'vue'

export function addNewRecipe(state, payload){
    state.listOfRecipes.push(payload)
}

export function deleteRecipe(state, id){
    const index = state.listOfRecipes.findIndex(r => r.id === id)
    if(index > -1){
        state.listOfRecipes.splice(index,1)
    }
}

export function editRecipe(state, payload){
    const index = state.listOfRecipes.findIndex(r => r.payload.id === payload.id)
    if(index > -1){
        state.listOfRecipes.splice(index,1, payload)
    }
}
