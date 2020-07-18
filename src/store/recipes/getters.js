export function recipesList(state) {
    return state.list_of_recipes
};

export function recipesSample(state, getters) {
    return getters.recipesList.filter(r => r.recipe.sample == true)
};

export function recipesSmoked(state, getters){
    return getters.recipesList.filter(r => r.recipe.category === "1")
};

export function recipesCured(state, getters){
    return getters.recipesList.filter(r => r.recipe.category === "2")
};

export function recipesFresh(state, getters){
    return getters.recipesList.filter(r => r.recipe.category === "3")
};

export function recipesAged(state, getters){
    return getters.recipesList.filter(r => r.recipe.category === "4")
};

export function recipesEmulsified(state, getters){
    return getters.recipesList.filter(r => r.recipe.category === "6")
};

export function recipesCooked(state, getters){
    return getters.recipesList.filter(r => r.recipe.category === "5")
};
export function recipeByID(state, getters){
    return id => getters.recipesList.find(r =>{
        return r.id === id
      })
};
