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
    let recipesFromFirebase = []
    recipesRef.on("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            const idRecipeFromFirebase = childSnapshot.key
            const recipeRecipeFromFirebase = childSnapshot.val()
            const recipeFromFirebase = {
                id: idRecipeFromFirebase,
                recipe: recipeRecipeFromFirebase
            }
            console.log('elemento ', recipeFromFirebase)
            commit('initialPopulateRecipesFromFirebase', recipeFromFirebase)
        })
    })
    
    //commit('initialPopulateRecipesFromFirebase', )
}
