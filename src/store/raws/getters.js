export function rawMaterialsList(state){
    return state.list_of_raws;
}

export function rawMaterialByID(state, getters){
    return id => getters.rawMaterialsList.find(r =>{
        return r.id === id
      })
};
