import { uid } from 'quasar'

import { firebaseDataBase } from 'boot/firebase'

export function addNewRecipe({ dispatch }, recipe) {
    let recipeUID = uid()
    let payload ={
        id: recipeUID,
        recipe: recipe
    }
    dispatch('firebaseAddRecipe', payload)
}

export function deleteRecipe({ dispatch }, id){
    dispatch('firebaseDeleteRecipe', id)
}

export function editRecipe({ dispatch }, payload){
    dispatch('firebaseUpdateRecipe', payload)
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

export function firebaseAddRecipe({}, payload){
    let recipesRef = firebaseDataBase.ref('recipes/' + payload.id)
    recipesRef.set(payload.recipe)
}

export function firebaseUpdateRecipe({}, payload){
    let id = payload.id
    let recipesRef = firebaseDataBase.ref('recipes/' + id)
    recipesRef.update(payload.recipe)
}

export function firebaseDeleteRecipe({}, id){
    let recipesRef = firebaseDataBase.ref('recipes/' + id)
    recipesRef.remove()
}