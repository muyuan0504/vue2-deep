<template>
    <div>
        <h2>vuex</h2>
        <p>
            <span>getCount: </span>
            <span>{{ getCount.count }}</span>
        </p>
        <p>
            <span>count: </span>
            <span>{{ count }}</span>
        </p>
        <p>
            <span>countA: </span>
            <span>{{ countA }}</span>
        </p>
        <button @click.stop="changeCount">count++</button>
        <button @click.stop="changeCountA">countA++</button>
        <component-a />
    </div>
</template>
<script>
import ComponentA from './componentA'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('a')
import { mapState as useMapState } from 'vuex'
export default {
    props: [],
    components: { ComponentA },
    watch: {},
    data() {
        return {}
    },
    computed: {
        // ...mapState({
        //     countA: (state) => state.a.countA,
        // }),
        /** 可以使用 mapState, mapGetters, mapActions 和 mapMutations 这些函数来绑定带命名空间的模块 */
        // ...mapState('a', {
        //     countA: (state) => state.countA,
        // }),
        ...mapState({
            countA: (state) => state.countA,
        }),
        ...useMapState({
            count: (state) => state.count,
        }),
        getCount() {
            return this.$store.state
        },
    },
    beforeCreate() {
        console.log('beforeCreate: $store 注入')
    },
    created() {
        console.log('this.$store.state: ', this.$store, this.$store.state.a)
    },
    methods: {
        changeCount() {
            this.$store.commit('calcCount')
        },
        changeCountA() {
            this.$store.commit('a/calcCountA')
        },
    },
}
</script>
<style lang="scss" scoped></style>
