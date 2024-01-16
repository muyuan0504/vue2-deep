<template>
    <div>
        <p>use-inject</p>
        <p>
            <span>count:</span>
            <span>{{ count }}</span>
        </p>
        <p>
            <span>moduleCount:</span>
            <span>{{ moduleCount.count }}</span>
        </p>
        <p>
            <span>reactiveCount: </span>
            <span>{{ reactiveCount }}</span>
        </p>
        <p>
            <span>reactiveObj.count: </span>
            <span>{{ reactiveObj.count }}</span>
        </p>
        <p>
            <button @click.stop="changeMouduleCount">变更 moduleCount.count</button>
            <button @click.stop="changeCount">变更 count</button>
        </p>
    </div>
</template>
<script>
export default {
    /** inject: Array<string> | { [key: string]: string | Symbol | Object } */
    // inject: ['count', 'moduleCount'],
    inject: {
        count: { from: 'count' },
        moduleCount: { from: 'moduleCount' },
        reactiveCount: { from: 'reactiveCount' },
        /**  reactiveObj: { count: 0 } 是一个引用类型对象，在inject初始化中，触发响应式数据的getter,父组件的watcher收集了子组件的Watcher，导致跨组件实例的响应式引用 */
        reactiveObj: { from: 'reactiveObj' },
    },
    data() {
        return {
            count: this.count,
        }
    },
    /** reactiveObj.count 的变化会触发子组件的 updated  */
    updated() {
        console.log('触发了update')
    },
    methods: {
        changeMouduleCount() {
            this.moduleCount.count++
        },
        changeCount() {
            this.count++
            console.log(this.count, this.reactiveCount)
        },
    },
}
</script>
<style lang="scss" scoped></style>
