export function texturesList(state) {
    return state.list_of_Textures
};

export function textureByID(state, getters){
    return id => getters.texturesList.find(t =>{
        return t.id === id
      })
};