import API from "./API"

export default {

    getData ( payload )
    {
        return API().get( `clinic/getData`, payload )
    },

}