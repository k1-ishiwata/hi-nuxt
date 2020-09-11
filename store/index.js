export const state = () => ({
    breadcrumbList: []
})

export const mutations = {
    breadcrumbList(state, payload) {
    state.breadcrumbList = payload
}
}

export const actions = {
    addBreadcrumbList({ commit }, payload) {
    return commit('breadcrumbList', payload)
}
}

export const getters = {
    breadcrumbList: (state) => state.breadcrumbList
}