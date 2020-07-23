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
            showErrorMessage('Erro na autenticação')
        })
}
export function logoutUser() {
    firebaseAuth.signOut()
}

export function handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
        Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('userLoggedIn', true)
        let userData = {
            id: firebaseAuth.currentUser.uid,
            email: firebaseAuth.currentUser.email
        }
        commit('setUserData', userData)
    }
    else {
          commit('setLoggedIn', false)
          LocalStorage.set('userloggedIn', false)
          let userData = {
            id: '-',
            email: '-'
        }
        commit('setUserData', userData)
        this.$router.replace('/auth')
      }
    })
}
