<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>

        <q-toolbar-title class="my-font-logo large absolute-center text-bold text-h3 q-py-xs q-my-xs">
          Porksmith
        </q-toolbar-title>

        <q-btn
          v-if="!userLoggedIn"
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
        <q-route-tab to="/recipesSmoked" icon="img:icons/camping.svg" label="Defumados" />
        <q-route-tab to="/recipesAged" icon="img:icons/prosciuto2.svg" label="Maturados" />
        <q-route-tab to="/recipesFresh" icon="img:icons/fresh.svg" label="Produtos Frescos" />
        <q-route-tab to="/recipesEmulsified" icon="img:icons/sausages.svg" label="Emulsificados" />
        <q-route-tab to="/recipesCooked" icon="img:icons/ham.svg" label="Cozidos" />
        <q-route-tab to="/addRecipe" icon="add_circle" label="Nova Receita" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="1036"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item-label
          header
          class="text-h6 text-center text-black"

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
            :key="link.seq"
            v-bind="link"
          />
        </div>

        <div v-else>
          <EssentialLink
            v-for="link in sampleLinks"
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
import { mapState, mapActions } from 'vuex'

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
          title: '',
          icon: '',
          link: '',
          seq: 1
        },
        {
          title: 'Minhas Receitas',
          icon: 'accessibility_new',
          link: '/recipesMyRecipes',
          seq: 2
        },
        {
          title: '',
          icon: '',
          link: '',
          seq: 3
        },
        {
          title: 'Receitas Públicas',
          icon: 'menu_book',
          link: '/recipesShared',
          seq: 4
        },
        {
          title: 'Defumados',
          icon: 'img:icons/camping.svg',
          link: '/recipesSmoked',
          seq: 5
        },
        {
          title: 'Maturados',
          icon: 'img:icons/prosciuto2.svg',
          link: '/recipesAged',
          seq: 6
        },
        {
          title: 'Produtos Frescos',
          icon: 'img:icons/fresh.svg',
          link: '/recipesFresh',
          seq: 7
        },
        {
          title: 'Emulsificados',
          icon: 'img:icons/sausages.svg',
          link: '/recipesEmulsified',
          seq: 8
        },
        {
          title: 'Cozidos',
          icon: 'img:icons/ham.svg',
          link: '/recipesCooked',
          seq: 9
        },
        {
          title: '',
          icon: '',
          link: '',
          seq: 10
        },
        {
          title: 'Criar nova receita',
          icon: 'add_circle',
          link: '/addRecipe',
          seq: 11
        },
      ],
      sampleLinks: [
        {
          title: 'Livro de Receitas - Amostra',
          icon: 'menu_book',
          link: '/recipesSample'
        }
      ]
    }
  },
  computed: {
    ...mapState('auth', ['userLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>

<style>
  @media screen and (min-width: 1023px){
    .q-footer{
      display: none;
    }
  }
</style>