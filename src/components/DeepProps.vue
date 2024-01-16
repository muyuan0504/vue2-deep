<template>
	<div>
	<p>
		<h2>父组件：DEEP_PROPS</h2>
		<div>propObj.from: {{ propObj.from }}</div>
		<div>propNumber: {{ propNumber }}</div>
		<div>propArray: {{ propArray.join('') }}</div>
		<button @click.stop="changePropsData">改变propObj.from</button>
		<button @click.stop="propNumber++">改变propNumber</button>
		<button @click.stop="changeArray">改变propArray</button>
	</p>
	<p>
		<!-- <div>子组件use-props数据：</div> -->
		<use-props :prop-obj="propObj" :prop-array="propArray" :prop-number="propNumber" @updateProp="updateProp" />
		<!-- <use-props /> -->
	</p>
</div>
</template>
<script>
import UseProps from './use-prop/index.vue'
// console.error('---------- aiden --------------', UseProps)
export default {
	props: [],
	components: {
		UseProps
	},
	watch: {},
	data() {
        return {
            propNumber: 0,
            propObj: { from: 'app' },
            propArray: ['array']
        }
    },
	computed: {},
	created() {
		console.error('父组件 this.$options: ', this.$options.propsData)
	},
	methods: {
		changePropsData() {
            this.propObj.from = 'app' + (Math.random() * 10).toFixed(2)
        },
        updateProp() {
            console.error('---------- aiden --------------', this.propObj, this.propNumber)
        },
        changeArray() {
            this.propArray.push((Math.random() * 10).toFixed(2))
        }
	},
}
</script>
<style lang="scss" scoped></style>
