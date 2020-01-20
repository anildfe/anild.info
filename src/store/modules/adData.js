import axios from 'axios';

const state = {
    adData: {},
    blogData: {}
};
const getters = {
    name: (state) => state.adData.name,
    socials: (state) => state.adData.socials,
    aboutMe: (state) => state.adData.aboutMe,
    education: (state) => state.adData.education,
    experience: (state) => state.adData.experience,
    skills: (state) => state.adData.skills,
    projects: (state) => state.adData.projects,
    contacts: (state) => state.adData.contacts,
    blog: (state) => state.blogData.items
};
const actions = {
    async fetchAdData({ commit }) {
        const response = await axios.get('data.json');
        commit('setAdData', response.data);
    },
    async fetchBlogData({ commit }) {
        const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anildfe');
        commit('setBlogData', response.data);
    }
};
const mutations = {
    setAdData: (state, adData) => {
        state.adData = adData;
    },
    setBlogData: (state, blogData) => {
        state.blogData = blogData;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}