export function recipesList(state) {
    return state.listOfRecipes
};

export function recipesSample(state, getters) {
    return getters.recipesList.filter(r => r.recipe.sample == true)
};

export function recipesSmoked(state, getters){
    return getters.recipesList.filter(r => (r.recipe.category === "1") && r.recipe.private == false)
};

export function recipesCured(state, getters){
    return getters.recipesList.filter(r => (r.recipe.category === "2") && r.recipe.private == false)
};

export function recipesFresh(state, getters){
    return getters.recipesList.filter(r => (r.recipe.category === "3") && r.recipe.private == false)
};

export function recipesAged(state, getters){
    return getters.recipesList.filter(r => (r.recipe.category === "4") && r.recipe.private == false)
};

export function recipesEmulsified(state, getters){
    return getters.recipesList.filter(r => (r.recipe.category === "6") && r.recipe.private == false)
};

export function recipesCooked(state, getters, rootState, rootGetters){
    return getters.recipesList.filter(r => (r.recipe.category === "5") && r.recipe.private == false)
};

export function recipeByID(state, getters){
    return id => getters.recipesList.find(r =>{
        return r.id === id
      })
};

export function recipesMyRecipes(state, getters, rootState, rootGetters){
    return getters.recipesList.filter(r => r.recipe.author === rootState.auth.currentLoggedUser.id)
};

export function recipesShared(state, getters){
    return getters.recipesList.filter(r => r.recipe.private == false)
};