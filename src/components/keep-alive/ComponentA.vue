<template>
    <div>
        <h1>ComponentA.vue</h1>
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
        console.log('activated: ComponentA ')
    },
    deactivated() {
        console.log('deactivated: ComponentA ')
    },
}
</script>
<style lang="scss" scoped></style>
