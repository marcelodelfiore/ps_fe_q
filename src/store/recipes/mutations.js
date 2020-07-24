import Vue from 'vue'

export function addNewRecipe(state, payload){
    state.listOfRecipes.push(payload)
    // Vue.set(state.listOfRecipes, payload.id, payload.recipe)
}

export function deleteRecipe(state, id){
    const index = state.listOfRecipes.findIndex(r => r.id === id)
    console.log('Na mutation deleteRecipe index=',index)
    if(index > -1){
        state.listOfRecipes.splice(index,1)
    }
    //Vue.delete(state.listOfRecipes, id)
}
