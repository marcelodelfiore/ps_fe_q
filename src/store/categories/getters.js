export function categoriesList(state){
  return state.list_of_categories
};

export function categoryByID(state, getters){
  return id => getters.categoriesList.find(r =>{
      return r.id === id
    })
};
