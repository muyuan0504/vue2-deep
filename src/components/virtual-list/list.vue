<template>
    <div ref="contain" class="contain" :style="{ height: containHeight }" @scroll="handleScroll">
        <div class="list" :style="{ top: listTop }">
            <div class="list-item" :style="{ height: itemHeight }" v-for="item in showList" :key="item.id">{{ item.content }}</div>
        </div>
        <!-- 撑开容器的高度 -->
        <div class="bar" :style="{ height: barHeight }"></div>
    </div>
</template>
<script>
export default {
    props: {
        list: { type: Array, default: () => [] },
        height: { type: Number, default: 60 },
        size: { type: Number, default: 10 },
    },
    components: {},
    watch: {},
    data() {
        return {
            startIndex: 0,
            endIndex: this.size,
        }
    },
    computed: {
        /** 容器高度 */
        containHeight() {
            return this.size * this.height + 'px'
        },
        /** 列表项的高度 */
        itemHeight() {
            return this.height + 'px'
        },
        /** 列表实际的渲染占用高度 */
        barHeight() {
            return this.height * this.list.length + 'px'
        },
        /** 列表top定位处理 */
        listTop() {
            return this.startIndex * this.height + 'px'
        },
        /** 展示的渲染列表 */
        showList() {
            return this.list.slice(this.startIndex, this.endIndex)
        },
    },
    methods: {
        handleScroll(e) {
            // e.target.scrollTop, this.$refs.contain.scrollTop 都可以
            // console.error('---------- aiden --------------', e.target.scrollTop, this.$refs.contain.scrollTop)
            const gap = e.target.scrollTop
            const index = Math.floor(gap / this.height)
            /** 滚动到底部的边界处理 */
            if (index <= this.list.length - this.size) {
                this.startIndex = index
                this.endIndex = index + this.size
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.contain {
    position: relative;
    width: 360px;
    overflow-y: scroll;
    line-height: 60px;
    text-align: center;
    background: #ccc;
    .list {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }
}
</style>
