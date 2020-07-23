import { firebaseAuth } from 'boot/firebase'

export default function () {
  return {
    userLoggedIn: false,
    currentLoggedUser: {
    }
  }
}