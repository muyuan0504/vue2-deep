<template>
    <div>
        <h3>Component B</h3>
        <p>
            <span>isMixin: </span>
            <span>{{ isMixin }}</span>
        </p>
    </div>
</template>
<script>
import useMixin from './mixin'
export default {
    name: 'ComponentB',
    mixins: [useMixin],
}
</script>
<style lang="scss" scoped></style>
