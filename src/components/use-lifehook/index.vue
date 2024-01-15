<template>
    <!-- 生命周期钩子 -->
    <div>
        <span>use-lifehook in son</span>
        <button @click.stop="clickError">点击报错</button>
    </div>
</template>
<script>
export default {
    methods: {
        clickError() {
            console.log(error)
        },
    },
    beforeCreate() {
        /** 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用 */
        console.log('beforeCreate: use-lifehook in son ')
    },
    created() {
        /**
         * 在实例创建完成后被立即同步调用。
         * 在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。
         * 然而，挂载阶段还没开始，且 $el property 目前尚不可用
         */
        console.log('created: use-lifehook in son ')
    },
    beforeMount() {
        /** 在挂载开始之前被调用：相关的 render 函数首次被调用 */
        console.log('beforeMount: use-lifehook in son ')
    },
    mounted() {
        /**
         * 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内
         * 注意 mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick
         */
        console.log('mounted: use-lifehook in son ')
    },
    beforeUpdate() {
        /** 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器 */
        console.log('beforeUpdate: use-lifehook in son ')
    },
    updated() {
        /**
         * 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用
         * 注意，updated 不会保证所有的子组件也都被重新渲染完毕。如果你希望等到整个视图都渲染完毕，可以在 updated 里使用 vm.$nextTick
         */
        console.log('updated: use-lifehook in son ')
    },
    activated() {
        /** 被 keep-alive 缓存的组件激活时调用 */
        console.log('activated: use-lifehook in son ')
    },
    deactivated() {
        /** 被 keep-alive 缓存的组件失活时调用 */
        console.log('deactivated: use-lifehook in son ')
    },
    beforeDestroy() {
        /** 实例销毁之前调用。在这一步，实例仍然完全可用 */
        console.log('beforeDestroy: use-lifehook in son ')
    },
    destroyed() {
        /** 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁 */
        console.log('destroyed: use-lifehook in son ')
    },
}
</script>
<style lang="scss" scoped></style>
