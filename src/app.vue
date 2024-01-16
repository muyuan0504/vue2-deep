<template>
    <div class="app-vue">
        <div>app.vue</div>
        <!-- <deep-life /> -->
        <!-- <deep-data /> -->
        <deep-props />
        <!-- <deep-computed /> -->
        <!-- <deep-inject /> -->
        <use-slot>
            <deep-alive />
            <div>use-slot</div>
        </use-slot>
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
