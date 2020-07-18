import { firebaseAuth } from 'boot/firebase'

import { LocalStorage, Loading } from 'quasar'

import { showErrorMessage } from '../../functions/function-show-error-message.js'

export function registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('response: ', response)
        })
        .catch(error => {
            showErrorMessage(error.message)
        })
}

export function loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('response: ', response)
        })
        .catch(error => {
            showErrorMessage('Usuário não existe')
        })
}
export function logoutUser() {
    console.log('logoutUser')
    firebaseAuth.signOut()
}

export function handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
        Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('userLoggedIn', true)
      }
      else {
          commit('setLoggedIn', false)
          LocalStorage.set('userloggedIn', false)
          this.$router.replace('/auth')
      }
    })
}
