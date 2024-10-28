<template>
    <div>
        虚拟列表加载：
        <list :list="useList" :size="10" :height="60" />
    </div>
</template>
<script>
import List from './list'
export default {
    props: [],
    components: { List },
    computed: {
        useList() {
            return new Array(30).fill('').map((item, _index) => {
                return {
                    id: _index,
                    content: `列表数据下标：${_index}`,
                }
            })
        },
    },
    watch: {},
    data() {
        return {}
    },
    created() {},
    methods: {},
}
</script>
<style lang="scss" scoped></style>
