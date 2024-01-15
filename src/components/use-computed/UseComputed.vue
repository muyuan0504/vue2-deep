<template>
    <div>
        <p>
            <span>getCount: </span>
            <span>{{ getCount }}</span>
        </p>
        <p>
            <button @click.stop="changeModuleVariable">changeModuleVariable</button>
            <button @click.stop="changeCountB">changeCountB</button>
            <button @click.stop="setGetCount">setGetCount</button>
        </p>
        <p>
            <span>useSetter: </span>
            <span>{{ useSetter }}</span>
        </p>
        <p>
            <button @click.stop="setUseSetter">setUseSetter</button>
        </p>
    </div>
</template>
<script>
const oneModuleVarialbe = { count: 1 }
export default {
    props: [],
    components: {},
    watch: {},
    data() {
        return { countA: 0, countB: 1 }
    },
    computed: {
        getCount() {
            return oneModuleVarialbe.count + this.countB
        },
        useSetter: {
            // get 初始化的 watcher 依赖于 this.countA 的更新
            get: function () {
                return this.countA + Math.random() * 10
            },
            // 如果 set 不涉及 countA 更新，那么 useSetter 计算属性不变更
            set: function (v) {
                console.log(v)
                this.countA += v
            },
        },
    },
    created() {},
    methods: {
        /** 由于 oneModuleVarialbe 不是响应式数据，所以即使我们更新了模块变量oneModuleVarialbe，但是getCount缓存了上一次计算的值，所以这里不会马上更新getCount */
        changeModuleVariable() {
            oneModuleVarialbe.count++
            console.log('changeModuleVariable: ', oneModuleVarialbe)
        },
        /** 这里更新了countB,会直接更新getCount的dirty属性，当countB驱动的视图更新时，重新计算了getCount的值 */
        changeCountB() {
            this.countB++
        },
        setGetCount() {
            this.getCount = 8
        },
        setUseSetter() {
            this.useSetter = 8
            // this.countA++  // 也可以直接更新 countA 更新计算属性
        },
    },
}
</script>
<style lang="scss" scoped></style>
