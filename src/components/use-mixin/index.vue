<template>
    <div>
        <h2>usemixin</h2>
        <p>
            <span>data from mixin: </span>
            <span>{{ mixinData.count }}</span>
        </p>
        <component-a />
        <button @click.stop="clickEvt">clickEvt</button>
    </div>
</template>
<script>
import useMixin from './mixin'
export default {
    mixins: [useMixin],
    methods: {
        clickEvt() {
            console.log('click-method in component')
            console.log('data in mixin', this.mixinData)
        },
    },
}
</script>
<style lang="scss" scoped></style>
