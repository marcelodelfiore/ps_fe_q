export function texturesList(state) {
    return state.list
}

export function textureByID(state, getters, id){
    return getters.texturesList.find(t => t.id === id);
}
