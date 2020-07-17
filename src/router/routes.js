
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
       component: () => import('pages/Index.vue')
      },
      { path: '/recipes',
       component: () => import('pages/recipes/recipes.vue')
      },
      { path: '/recipes/:id',
       component: () => import('pages/recipes/recipe.vue')
      },
      { path: '/recipesSample',
      component: () => import('pages/recipes/recipesSample.vue')
      },
      { path: '/recipes',
      component: () => import('pages/recipes/recipesSample.vue')
      },
      { path: '/recipesSmoked',
      component: () => import('pages/recipes/recipesSmoked.vue')
      },
      { path: '/recipesCured',
      component: () => import('pages/recipes/recipesCured.vue')
      },
      { path: '/recipesFresh',
      component: () => import('pages/recipes/recipesFresh.vue')
      },
      { path: '/recipesEmulsified',
      component: () => import('pages/recipes/recipesEmulsified.vue')
      },
      { path: '/recipesAged',
      component: () => import('pages/recipes/recipesAged.vue')
      },
      { path: '/recipesCooked',
      component: () => import('pages/recipes/recipesCooked.vue')
      },
      { path: '/raws',
      component: () => import('pages/raws/raws.vue')
      },
      { path: '/raws/:id',
      component: () => import('pages/raws/raw.vue')
      },
      { path: '/textures',
        component: () => import('pages/textures/textures.vue')
      },
      { path: '/textures/:id',
      component: () => import('pages/textures/texture.vue')
      },
      { path: '/categories',
        component: () => import('pages/categories/categories.vue')
      },
      { path: '/categories/:id',
      component: () => import('pages/categories/category.vue')
      },
      { 
        path: '/auth', 
        component: () => import('pages/auth/auth.vue') 
      } 

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
