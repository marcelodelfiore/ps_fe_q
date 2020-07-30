<template>
	<q-page padding>

		<q-btn @click="facebookLogin"/>

	</q-page>
</template>

<script>
import * as firebase from "firebase"

import "firebase/auth"
import { firebaseAuth } from '../../boot/firebase'

	export default {
		data () {
	    return {
	      tab: 'login'
	    }
	  },
	  components: {
	  },
	  methods:{
		  facebookLogin: function(){
			var provider = new firebase.auth.FacebookAuthProvider();
			//var provider = new firebase.auth().FacebookAuthProvider();
			provider.addScope('user_birthday');
			firebaseAuth.signInWithPopup(provider)
			.then(function(result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
				console.log('facebook token: ', token)
				console.log('facebook user: ', user)
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
				console.log('facebook error: ', error)
			});
		  }
	  }
	}
</script>

<style>
	.auth-tabs {
		max-width: 500px;
		margin: 0 auto;
	}
</style>