export default {
    /** 添加 namespaced: true 的方式使其成为带命名空间的模块 */
    namespaced: true,
    state: {
        countA: 99, // 'a/countA'
    },
    mutations: {
        // commit('a/calcCountA')
        calcCountA(state) {
            state.countA++
        },
    },
}
