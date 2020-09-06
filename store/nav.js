// States
export const state = () => ({

    toggleSidebar: false,
    toggleHeader: false

})

// mutations
export const mutations = {

    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
    },
    TOGGLE_HEADER(state) {
        state.toggleHeader = !state.toggleHeader
    }

}

// actions
export const actions = {

    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    toggleHeader({ commit }) {
        commit('TOGGLE_HEADER')
    }

}

// Getters
export const getters = {

    toggleSidebar: state => state.toggleSidebar,
    toggleHeader: state => state.toggleHeader,

}