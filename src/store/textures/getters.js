export function texturesList(state) {
    return state.list
};

export function textureByID(state, getters){
    return id => getters.texturesList.find(t =>{
        return t.id === id
      })
};