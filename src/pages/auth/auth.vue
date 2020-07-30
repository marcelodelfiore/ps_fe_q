<template>
	<q-page padding>
		<div class="row">
			<div class="col-5">

			</div>
			<div v-if="!userLoggedIn" class="col text-white fixed-center" style="background-color: #3b5998">
				<q-btn @click="facebookLogin" align="around" icon="img:icons/facebook.svg">Entrar com Facebook</q-btn>
			</div>
		
			<div class="col-5">

			</div>
		</div>
		

	</q-page>
</template>

<script>
import { mapState } from 'vuex'

import * as firebase from "firebase"

import "firebase/auth"

export default {
	data () {
		return {
			tab: 'login'
		}
	},
	computed: {
		...mapState('auth', ['userLoggedIn']),
	},
	methods:{
		facebookLogin: function(){
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('user_birthday');
		firebase.auth().signInWithRedirect(provider);
		firebase.auth().getRedirectResult()
		.then(function(result) {
			if (result.credential) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// ...
			}
			// The signed-in user info.
			var user = result.user;
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
