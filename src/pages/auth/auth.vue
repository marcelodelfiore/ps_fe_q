<template>
	<q-page padding>
		<div class="row q-pa-lg">
			<div class="col-4">

			</div>
			<div v-if="!userLoggedIn" class="col-4 text-center">
				<q-card class="auth-tabs">
					<q-tabs
						v-model="tab"
						dense
						class="text-grey"
						active-color="primary"
						indicator-color="primary"
						align="justify"
						narrow-indicator
					>
						<q-tab name="login" label="Entrar" />
						<q-tab name="register" label="Registrar" />
					</q-tabs>


					<q-separator />

					<q-tab-panels v-model="tab" animated>
						<q-tab-panel name="login">
						<LoginRegister :tab="tab" />
						</q-tab-panel>

						<q-tab-panel name="register">
						<LoginRegister :tab="tab" />
						</q-tab-panel>

					</q-tab-panels>
				</q-card>
			</div>

			<div class="col-4">

			</div>
		</div>

		<div class="row q-pa-lg">
			<div class="col-4">

			</div>
			<div v-if="!userLoggedIn" class="col-4 text-white text-center" style="background-color: #3b5998">
				<q-btn flat @click="facebookLogin" align="around" icon="img:icons/facebook.svg">Entrar com Facebook</q-btn>
			</div>
		
			<div class="col-4">

			</div>
		</div>
		

	</q-page>
</template>

<script>
import { mapState } from 'vuex'

import * as firebase from "firebase"

import "firebase/auth"

import LoginRegister from 'components/auth/LoginRegister'

export default {
	components:{
		LoginRegister
	},
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
