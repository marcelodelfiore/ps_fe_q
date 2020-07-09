<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>

        <q-toolbar-title class="my-font-logo large absolute-center text-bold text-h3 q-py-xs q-my-xs">
          Porksmith
        </q-toolbar-title>

        <q-btn
          v-if="!userloggedIn"
          to="/auth"
          flat
          icon-right="login"
          label="Entrar"
          class="absolute-right" 
        />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Sair"
          class="absolute-right"
        />

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs dense>
        <q-route-tab to="/" icon="home" label="Início" />
        <q-route-tab to="/recipes" icon="menu_book" label="Receitas" />
        <q-route-tab to="/raws" icon="construction" label="M.Primas" />
        <q-route-tab to="/textures" icon="texture" label="Texturas" />
        <q-route-tab to="/categories" icon="category" label="Categorias" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"

        >
          Atalhos
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <div v-if="userLoggedIn">
          <EssentialLink
            v-for="link in protectedLinks"
            :key="link.title"
            v-bind="link"
          />
        </div>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'início',
          icon: 'home',
          link: '/'
        }
      ],
      protectedLinks: [
        {
          title: 'Livro de Receitas',
          icon: 'menu_book',
          link: '/recipes'
        }
      ]
    }
  },
  computed: {
    ...mapState('auth', 'userLoggedIn')
  },
}
</script>

<style>
  @media screen and (min-width: 768px){
    .q-footer{
      display: none;
    }
  }
</style>