import { uid } from 'quasar'

export function addNewRecipe({ commit }, recipe) {
    let recipeUID = uid()
    let payload ={
        id: recipeUID,
        recipe: recipe
    }
    commit('addNewRecipe', payload)
}
