<template>
    <div>
        <h2>usemixin</h2>
        <p>
            <span>data from mixin: </span>
            <span>{{ mixinData.count }}</span>
        </p>
        <p>
            <span>isMixin: </span>
            <span>{{ isMixin }}</span>
        </p>
        <component-a />
        <component-b />
        <button @click.stop="clickEvt">clickEvt</button>
    </div>
</template>
<script>
import useMixin from './mixin'
import ComponentB from './componentB'
export default {
    mixins: [useMixin],
    components: { ComponentB },
    data() {
        return {
            isMixin: false,
        }
    },
    created() {
        console.error('created callback by component')
    },
    methods: {
        clickEvt() {
            console.log('click-method in component')
            console.log('data in mixin', this.mixinData)
        },
    },
}
</script>
<style lang="scss" scoped></style>
