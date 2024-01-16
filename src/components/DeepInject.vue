<template>
    <div>
        <h2>Deep-INJECT</h2>
        <p>
            <span>reactiveCount</span>
            <span>{{ reactiveCount }}</span>
            <button @click.stop="reactiveCount++">父组件变更reactiveCount</button>
        </p>
        <p>
            <span>reactiveObj.count</span>
            <span>{{ reactiveObj.count }}</span>
            <button @click.stop="reactiveCount++">父组件变更reactiveCount</button>
            <button @click.stop="reactiveObj.count++">父组件变更reactiveObj.count</button>
        </p>
        <p>
            <h2>Use-reject</h2>
            <use-inject />
        </p>
    </div>
</template>
<script>
import UseInject from './use-inject/index.vue'

const moduleCount = { count: 0 }

export default {
    components: { UseInject },
    data() {
        return {
            reactiveCount: 0,
            reactiveObj: { count: 0 }
        }
    },

    /** provide：Object | () => Object */
    // provide: {
    //     moduleCount,
    //     count: 0,
    // },
    provide() {
        return {
            moduleCount,
            count: 0,
            reactiveCount: this.reactiveCount,
            reactiveObj: this.reactiveObj
        }
    },
}
</script>
<style lang="scss" scoped></style>
