import { LocalStorage } from 'quasar'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
  	let userLoggedIn = LocalStorage.getItem('userLoggedIn')
    console.log('Usuário logado? ', userLoggedIn)
    if (!userLoggedIn && to.path !== '/auth') {
  		next('/auth')
  	}
  	else {
	    next()
  	}
  })
}