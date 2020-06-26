export function rawMaterialsList(state){
    return state.list;
}

export function rawMaterialByID(state, getters, id){
    return getters.rawMaterialsList.find(r => r.id === id);
}
  