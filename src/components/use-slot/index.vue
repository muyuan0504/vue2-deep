<template>
    <div>
        <h2>use-slot</h2>
    </div>
</template>
<script>
export default {
    props: [],
    components: {},
    watch: {},
    data() {
        return {}
    },
    computed: {},
    created() {
        console.log('use-slot', this.$slots.default)
    },
    methods: {},
}
</script>
<style lang="scss" scoped></style>
