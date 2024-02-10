import API from "./API"

export default {

    getPetsByUserId(id) {
        return API().get(`pet/getPetsByUserId/${id}`)
    },

    getPetById(id) {
        return API().get(`pet/getPet/${id}`)
    },

    updatePet(payload) {
        return API().post(`pet/updatePetProfile`, payload)
    },
    getPetTypes() {
        return API().get(`pet/getPetTypes`)
    },
    getPetBreeds(params) {
        return API().get(`pet/getPetBreeds`,{params})
    },
    savePet(payload){
        return API().post(`pet/savepet`, payload)
    }

}