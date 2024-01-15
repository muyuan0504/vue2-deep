<template>
    <div class="app-vue">
        <div>app.vue</div>
        <!-- <deep-props /> -->
        <deep-computed />
    </div>
</template>
<script>
import DeepProps from './components/DeepProps.vue'
import DeepComputed from './components/DeepComputed.vue'
export default {
    props: [],
    components: {
        DeepProps,
        DeepComputed,
    },

    computed: {},
    created() {},
    methods: {},
}
</script>
<style lang="scss" scoped>
.app-vue {
}
</style>
