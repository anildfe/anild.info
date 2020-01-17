import axios from 'axios';

const state = {
    adData: {}
};
const getters = {
    name: (state) => state.adData.name,
    socials: (state) => state.adData.socials,
    aboutMe: (state) => state.adData.aboutMe,
    education: (state) => state.adData.education,
    experience: (state) => state.adData.experience,
    skills: (state) => state.adData.skills,
    projects: (state) => state.adData.projects,
    contacts: (state) => state.adData.contacts
};
const actions = {
    async fetchAdData({ commit }) {
        const response = await axios.get('data.json');
        commit('setAdData', response.data);
    }
};
const mutations = {
    setAdData: (state, adData) => {
        state.adData = adData;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}