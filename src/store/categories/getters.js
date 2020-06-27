export function categoriesList(state){
  return state.list
};

export function categoryByID(state, getters){
  return id => getters.categoriesList.find(r =>{
      return r.id === id
    })
};
