<template>
    <div>
        <p>
            <span>count: </span>
            <span>{{ count }}</span>
        </p>
        <p>
            <button @click.stop="count++">count++</button>
        </p>
    </div>
</template>
<script>
export default {
    props: [],
    components: {},
    watch: {},
    // data: { count: 0 }, // 当data的返回值不是函数时，2.6.12版本下还有显示警告
    data() {
        return {
            count: 0,
        }
    },
    computed: {},
    created() {},
    methods: {},
}
</script>
<style lang="scss" scoped></style>
