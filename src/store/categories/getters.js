export function categoriesList(state){
  return state.list
};

export function categoryByID(state, getters, id){
  return getters.categoriesList.find(t => t.id === id);
};
