<template>
    <div>
        <div>propObj.from: {{ propObj.from }}</div>
        <div>localPropObj.from: {{ localPropObj.from }}</div>
        <!-- <div>propNumber: {{ propNumber }}</div> -->
        <div>localNum: {{ localNum }}</div>
        <div>localArray: {{ localArray.join('') }}</div>
        <div v-if="propBoolean">展示propBoolean</div>
        <button @click.stop="changePropsObj">改变propObj.from</button>
        <button @click.stop="changeLocalData">改变localPropObj.from</button>
        <button @click.stop="changePropNumber">改变propNumber</button>
        <button @click.stop="localNum++">改变localNum</button>
        <button @click.stop="changeLocalArray">改变localArray</button>
    </div>
</template>
<script>
export default {
    props: {
        propBoolean: { type: Boolean },
        // prop-obj 会在组件初始化的过程中，转化为驼峰格式，所以在created里面可以通过 this.propObj 取值
        'prop-obj': { type: Object, default: () => ({}) },
        // propNumber: { type: Number, default: 0, validator: (val) => val > 5 }, // 我们配置校验函数，设置proNumber需>5，当 < 5 时会报错(仅限开发模式下)
        propNumber: { type: Number, default: 0 },
        propArray: { type: Array, default: () => [] },
        // formatObj: Object, // 对于既没有父组件传递，又没有default的prop，默认为undefined
        // formatObj: '', // -> formatObj : { type: '' }
    },
    // props: ['propObj', 'propNumber'], // props的Array<string>配置形式
    components: {},
    watch: {},
    data() {
        return {
            localPropObj: this.propObj,
            localNum: this.propNumber,
            // localNum: 0,
            localArray: this.propArray,
        }
    },
    computed: {},
    created() {
        console.warn('---------- created --------------')
        console.error('---------- this.$attrs --------------', this.$attrs)
        console.error('this.$options.propsData: ', this.$options.propsData)
        console.log('this.propObj: ', this.propObj)
        console.log('this.localPropObj: ', this.localPropObj)
        console.log('this.localNum: ', this.localNum)
        console.log('this.localArray: ', this.localArray)
        console.log('this.propBoolean: ', this.propBoolean)
        console.log('this.formatObj: ', this.formatObj)
        console.warn('---------- created --------------')
    },
    methods: {
        changePropsObj() {
            this.propObj = { from: '--' }
            // this.propObj.from = 'app' + (Math.random() * 10).toFixed(2)
        },
        changeLocalData() {
            this.localPropObj.from = 'app' + (Math.random() * 10).toFixed(2)
        },
        changeLocalArray() {
            this.localArray[0] = 2
            console.log(this.localArray)
            // this.localArray.push(2)
            // this.localArray.push((Math.random() * 10).toFixed(2))
        },
        changePropNumber() {
            this.propNumber++
            console.error('---------- aiden --------------', this.propNumber)
        },
    },
}
</script>
<style lang="scss" scoped></style>
