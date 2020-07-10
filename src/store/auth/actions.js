import { firebaseAuth } from 'boot/firebase'

import { LocalStorage, Loading } from 'quasar'


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
            showErrorMessage(error.message)
        })
}
export function logoutUser() {
    console.log('logoutUser')
    firebaseAuth.signOut()
}

export function handleAuthStateChange({ commit, dispatch }) {
    console.log('Na action onAuthStateChanged !')
    firebaseAuth.onAuthStateChanged(user => {
        Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('userLoggedIn', true)
        this.$router.push('/')
      }
      else {
          commit('setLoggedIn', false)
          LocalStorage.set('loggedIn', false)
          this.$router.replace('/auth')
      }
    })
}
