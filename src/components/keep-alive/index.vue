<template>
    <div>
        <h1>keep-alive</h1>

        <!-- <keep-alive>
            当componentA和componentB同时包含时，只会渲染第一个组件A
            <component-a />
            <component-b />
        </keep-alive>

        <keep-alive>
            当componentA和componentB同时包含时，只会渲染第一个组件A
            <component-a />
            <component-b />
            <component-a v-if="active === 'ComponentA'" />
            <component-b v-else />
        </keep-alive> -->

        <keep-alive :include="includeComponents">
            <!-- 当componentA和componentB同时包含时，只会渲染第一个组件A
            <component-a />
            <component-b /> -->
            <component :is="active" />
        </keep-alive>

        <keep-alive> keep-alive的内容 </keep-alive>

        <button @click.stop="switchComp('ComponentA')">切换组件A</button>
        <button @click.stop="switchComp('ComponentB')">切换组件B</button>
    </div>
</template>
<script>
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
export default {
    components: { ComponentA, ComponentB },
    data() {
        return {
            active: 'ComponentA',
            /** 当 keep-alive 配置了include，只会对include命中的组件进行缓存, 而之外的组件，会正常被重新创建和销毁， */
            includeComponents: /ComponentA/,
        }
    },
    methods: {
        switchComp(type) {
            this.active = type
        },
    },
}
</script>
<style lang="scss" scoped></style>
