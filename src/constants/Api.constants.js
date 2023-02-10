export const API_RICKMORTY = {
    URL: "https://rickandmortyapi.com/api",
    CHARACTERS : function(){
        return `${this.URL}/character`
    },

    CHARACTERS_BY_ID : function(id){
        return `${this.URL}/character/${id}`
    }

}
//esto nos conecta con una api