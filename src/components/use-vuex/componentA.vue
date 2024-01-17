<template>
    <div>
        <h4>componentA</h4>
        <p>
            <span>getCount: </span>
            <span>{{ getCount.count }}</span>
        </p>
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
    computed: {
        getCount() {
            return this.$store.state
        },
    },
    created() {},
    methods: {},
}
</script>
<style lang="scss" scoped></style>
