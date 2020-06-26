export function recipesList(state) {
    return state.list
}

export function recipesDefumados(state, getters){
    return getters.recipesList.filter(r => r.category === "1")
}

export function recipesCurados(state, getters){
    return getters.recipesList.filter(r => r.category === "2")
}

export function recipesFrescos(state, getters){
    return getters.recipesList.filter(r => r.category === "3")
}

export function recipesMaturados(state, getters){
      return getters.recipesList.filter(r => r.category === "4")
}
    
export function recipeByID(state, getters, id){
      return getters.recipesList.find(r => r.id === id);
}

  