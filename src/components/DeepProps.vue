<template>
	<div>
	<p>
		<div>UseProps</div> <br />
		<div>propData: {{ propUseObj.from }}</div>
		<div>pureNum: {{ pureNum }}</div>
		<div>propUseArray: {{ propUseArray.join('') }}</div>
		<button @click.stop="changePropsData">改变propUseObj.from</button>
		<button @click.stop="pureNum++">改变pureNum</button>
		<button @click.stop="changeArray">改变propArray</button>
	</p>
	<p>
		<!-- <div>子组件use-props数据：</div> -->
		<use-props :prop-obj="propUseObj" :prop-array="propUseArray" :prop-number="pureNum" @updateProp="updateProp" />
		<!-- <use-props /> -->
	</p>
</div>
</template>
<script>
import UseProps from './use-prop/UseProps.vue'
console.error('---------- aiden --------------', UseProps)
export default {
	props: [],
	components: {
		UseProps
	},
	watch: {},
	data() {
        return {
            pureNum: 0,
            propUseObj: { from: 'app' },
            propUseArray: ['array']
        }
    },
	computed: {},
	created() {},
	methods: {
		changePropsData() {
            this.propUseObj.from = 'app' + (Math.random() * 10).toFixed(2)
        },
        updateProp() {
            console.error('---------- aiden --------------', this.propUseObj, this.pureNum)
        },
        changeArray() {
            this.propUseArray.push((Math.random() * 10).toFixed(2))
        }
	},
}
</script>
<style lang="scss" scoped></style>
