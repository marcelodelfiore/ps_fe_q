<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="text-h4 text-bold">
        Minhas Receitas
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center text-h4"
       v-for="thisRecipe in recipesMyRecipes" :key="thisRecipe.id">
          <q-card class="no-shadow">
            <q-card-section>
              <router-link :to="`/recipes/${thisRecipe.id}`" style="">
                <q-avatar size="200px">
                    <q-tooltip
                      max-width="200px"
                      anchor="top right"
                      content-class="bg-info text-black" 
                      content-style="font-size: 16px"
                      >
                      {{ thisRecipe.recipe.description }}
                    </q-tooltip>
                  <img :src= "thisRecipe.recipe.thumbnail">
                </q-avatar>
              </router-link>
            </q-card-section>

            <q-card-section>
              <div class="text-h7">{{ thisRecipe.recipe.title }} </div>
            </q-card-section>

            <q-card-actions>
              <div class="q-ma-lg">
              </div>
              <div class="q-ma-lg">
                <q-btn dense round color="primary" icon="edit" />
              </div>
              <div class="q-ma-lg">
                <q-btn dense round color="negative" icon="delete_forever" @click="promptToDelete(thisRecipe.id)"/>
              </div>
            </q-card-actions>
          </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { deleteRecipe } from '../../store/recipes/mutations';

export default {
    computed: {
    ...mapGetters('recipes', ["recipesMyRecipes"])
    },
    methods:{
      ...mapActions('recipes', ['deleteRecipe']),
      promptToDelete(id){
      this.$q.dialog({
              title: 'Confirmar',
              message: 'Tem certeza que deseja apagar essa receita ?',
              cancel: true,
              persistent: true
            }).onOk(() => {
              this.deleteRecipe(id)
            })
      },
    },
    name: 'Recipes'
}
</script>
