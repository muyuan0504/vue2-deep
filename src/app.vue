<template>
    <div class="app-vue">
        <div>app.vue</div>
        <div>
            <span>UseProps</span>
            <use-props />
        </div>
    </div>
</template>
<script>
import UseProps from './components/UseProps.vue'
export default {
    props: [],
    components: {
        UseProps,
    },
    watch: {},
    data() {
        return {}
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
