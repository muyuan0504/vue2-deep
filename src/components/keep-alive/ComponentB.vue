<template>
    <div>
        <h1>ComponentB.vue</h1>
    </div>
</template>
<script>
export default {
    created() {
        console.log('created: ComponentB ')
    },
    destroyed() {
        console.log('destroyed: ComponentB ')
    },
    activated() {
        console.log('activated: ComponentB ')
    },
    deactivated() {
        console.log('deactivated: ComponentB ')
    },
}
</script>
<style lang="scss" scoped></style>
