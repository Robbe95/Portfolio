
// initial state
const state = () => ({
    currentImage: String
});

// getters
const getters = {
    getCurrentImage: state => {
        return state.currentImage
    }
};

// actions
const actions = {
};

// mutations
const mutations = {
    setCurrentImage (state, payload) {
        state.currentImage = payload.image
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
