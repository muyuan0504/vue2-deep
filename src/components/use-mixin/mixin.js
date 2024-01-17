import ComponentA from './ComponentA'

export default {
    components: { ComponentA },
    data() {
        return {
            mixinData: { count: 0 },
            isMixin: true,
        }
    },
    created() {
        console.error('created callback by mixin')
    },
    methods: {
        clickEvt() {
            console.log('click-method in mixin')
        },
    },
}
