import API from "./API"

export default {

    getData ( params )
    {
        return API().get( `clinic/getData`, { params } )
    },

}