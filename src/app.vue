<template>
    <div class="app-vue">
        <div>app.vue</div>
        <!-- <deep-life /> -->
        <!-- <deep-data /> -->
        <!-- <deep-props /> -->
        <!-- <deep-computed /> -->
        <!-- <deep-inject /> -->
        <!-- <deep-alive /> -->
        <!-- 作用域插槽：使用 <template> 标签定义作用域插槽，并通过 slot-scope 属性指定作用域变量的名称 -->
        <!-- <use-slot>
            <template slot-scope="scopeProps">
                <span>use-slot from app.vue {{ scopeProps.usecount }}</span>
            </template>
            <div>use-slot from app.vue</div>
        </use-slot> -->
        <!-- <use-mixin />
        <use-vuex /> -->
        <vitrual-list />
    </div>
</template>
<script>
import DeepLife from './components/DeepLife'
import DeepData from './components/DeepData'
import DeepProps from './components/DeepProps'
import DeepComputed from './components/DeepComputed'
import DeepInject from './components/DeepInject'
import DeepAlive from './components/keep-alive/index'
import UseSlot from './components/use-slot/index'
import UseMixin from './components/use-mixin/index'
import UseVuex from './components/use-vuex/index'
import VitrualList from './components/virtual-list/index'
export default {
    props: [],
    components: {
        DeepLife,
        DeepData,
        DeepProps,
        DeepComputed,
        DeepInject,
        DeepAlive,
        UseSlot,
        UseMixin,
        UseVuex,
        VitrualList,
    },

    computed: {},
    created() {},
    methods: {
        /** methods的初始化实现比较简单
         * 1. 校验props是否有同名属性；
         * 2. bind组件实例到methods方法上.
         *
         * 以下是伪代码实
         * 现
         */
        initMethod(vm, methods) {
            const props = vm.$options.props
            for (const key in methods) {
                // process.env.NODE_ENV !== 'production'
                if (props && hasOwn(props, key)) {
                    warn(`Method "${key}" has already been defined as a prop.`, vm)
                }
                vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.app-vue {
}
</style>
