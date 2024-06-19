import API from "./API";

const PetService = {
  getPetsByUserId(id) {
    return API().get(`pet/getPetsByUserId/${id}`);
  },

  getPetById(id) {
    return API().get(`pet/getPet/${id}`);
  },

  updatePet(payload) {
    return API().post(`pet/updatePetProfile`, payload);
  },
  getPetTypes() {
    return API().get(`pet/getPetTypes`);
  },
  getPetBreeds(params) {
    return API().get(`pet/getPetBreeds`, { params });
  },
  savePet(payload) {
    return API().post(`pet/savepet`, payload);
  },
  getDocumentType() {
    return API().get(`pet/getDocumentType`);
  },
  savePetDocumnets(payload) {
    return API().post(`pet/savePetDocumnets`, payload);
  },
  getPetDocuments(params) {
    return API().get(`pet/getPetDocuments`, { params });
  },
  saveMultiPetDocumnets(payload) {
    return API().post(`pet/saveMultiPetDocumnets`, payload);
  },

  getPets(params = {}) {
    return API().get(`pet/getPets`, { params });
  },

  getPetAllDocuments(pet_id) {
    return API().get(`pet/getDocuments/${pet_id}`);
  },

  deleteDocument(payload) {
    return API().delete(
      `pet/remove-pet-documents/${payload?.pet_id}/${payload?.document_id}`
    );
  },

  getPetSpeciesList() {
    return API().get(`pet/getPetSpecies`);
  },
};

export default PetService;
