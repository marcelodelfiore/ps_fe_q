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

export function firebaseReadData(){
    console.log('firebase connect !!!')
    let recipesRef = firebaseDataBase.ref('recipes')
    recipesRef.on("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var id = childSnapshot.key
            var data = childSnapshot.val()
            console.log('id', id)
            console.log('dados', data)
        })
    })
}
