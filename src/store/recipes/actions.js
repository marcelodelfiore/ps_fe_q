import { uid } from 'quasar'

import { firebaseDataBase } from 'boot/firebase'

export function addNewRecipe({ commit }, recipe) {
    let recipeUID = uid()
    let payload ={
        id: recipeUID,
        recipe: recipe
    }
    commit('addNewRecipe', payload)
}

export function deleteRecipe({ commit }, id){
    commit('deleteRecipe', id)
}

export function editRecipe({ commit }, payload){
    commit('editRecipe', payload)
}

export function firebaseReadData({ commit }){
    let recipesRef = firebaseDataBase.ref('recipes')
    
        // child added
        recipesRef.on('child_added', snapshot => {
            let recipeRecipeFromFirebase = snapshot.val()
            let recipeFromFirebase = {
                id: snapshot.key,
                recipe: recipeRecipeFromFirebase
            }
            commit('addNewRecipe', recipeFromFirebase)
        })

        // child changed
        recipesRef.on('child_changed', snapshot => {
            let recipeRecipeFromFirebase = snapshot.val()
            let recipeFromFirebase = {
                id: snapshot.key,
                recipe: recipeRecipeFromFirebase
            }
            commit('editRecipe', recipeFromFirebase)
        })

        // child removed
        recipesRef.on('child_removed', snapshot => {
            let recipeId = snapshot.key
            commit('deleteRecipe', recipeId)
        })
}
