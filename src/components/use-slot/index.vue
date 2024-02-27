<template>
    <div>
        <h2>use-slot</h2>
        <!-- 作用域插槽, 将 usecount 传递给 slot 组件，最终会被 slot 的渲染函数接收 -->
        <slot :usecount="usecount"></slot>
    </div>
</template>
<script>
export default {
    props: [],
    components: {},
    watch: {},
    data() {
        return {
            usecount: 1,
        }
    },
    computed: {},
    created() {
        /** 
         * slot的节点内容，会挂载到组件实例的$slots上
         * 
         * 在使用作用域插槽时，父组件传递给子组件的内容是通过作用域插槽的方式传递的，而不是通过 $slots 属性。因此，如果在子组件中直接打印 this.$slots 是无法获取作用域插槽内容的
         */
        console.log('use-slot', this.$slots)
    },
    methods: {},
}
</script>
<style lang="scss" scoped></style>
