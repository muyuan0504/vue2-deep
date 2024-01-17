import ComponentA from './ComponentA'

export default {
    components: { ComponentA },
    data() {
        return {
            mixinData: { count: 0 },
        }
    },
    methods: {
        clickEvt() {
            console.log('click-method in mixin')
        },
    },
}
