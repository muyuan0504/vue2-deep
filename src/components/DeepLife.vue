<template>
    <!-- 生命周期钩子 -->
    <div>
        <!-- v-if场景 -->
        <!-- <p v-if="flag">
            <use-lifehook />
        </p> -->
        <!-- v-show场景 -->
        <!-- <p>
            <use-lifehook v-show="flag" />
        </p> -->
        <!-- keep-alive场景 -->
        <p>
            <keep-alive>
                <use-lifehook v-if="flag" />
            </keep-alive>
        </p>
        <p>
            <button @click.stop="switchFlag">切换子组件是否展示</button>
        </p>
    </div>
</template>
<script>
import UseLifehook from './use-lifehook/index.vue'
export default {
    components: { UseLifehook },
    data() {
        return {
            flag: true,
        }
    },
    methods: {
        switchFlag() {
            this.flag = !this.flag
        },
    },
    beforeCreate() {
        /** 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用 */
        console.error('beforeCreate: use-lifehook in father ')
    },
    created() {
        /**
         * 在实例创建完成后被立即同步调用。
         * 在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。
         * 然而，挂载阶段还没开始，且 $el property 目前尚不可用
         */
        console.error('created: use-lifehook in father ')
    },
    beforeMount() {
        /** 在挂载开始之前被调用：相关的 render 函数首次被调用 */
        console.error('beforeMount: use-lifehook in father ')
    },
    mounted() {
        /**
         * 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内
         * 注意 mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick
         */
        console.error('mounted: use-lifehook in father ')
    },
    beforeUpdate() {
        /** 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器 */
        console.error('beforeUpdate: use-lifehook in father ')
    },
    updated() {
        /**
         * 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用
         * 注意，updated 不会保证所有的子组件也都被重新渲染完毕。如果你希望等到整个视图都渲染完毕，可以在 updated 里使用 vm.$nextTick
         */
        console.error('updated: use-lifehook in father ')
    },
    activated() {
        /** 被 keep-alive 缓存的组件激活时调用 */
        console.error('activated: use-lifehook in father ')
    },
    deactivated() {
        /** 被 keep-alive 缓存的组件失活时调用 */
        console.error('deactivated: use-lifehook in father ')
    },
    beforeDestroy() {
        /** 实例销毁之前调用。在这一步，实例仍然完全可用 */
        console.error('beforeDestroy: use-lifehook in father ')
    },
    destroyed() {
        /** 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁 */
        console.error('destroyed: use-lifehook in father ')
    },
    errorCaptured(e, vm, info) {
        console.error('errorCaptured: use-lifehook in father ', e, vm, info)
        // 返回 true 表示错误已处理，不会再向上传播
        return true
    },
}
</script>
<style lang="scss" scoped></style>
