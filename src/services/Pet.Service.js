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
    }

}