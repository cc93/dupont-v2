<template>
    <transition
            :name="name"
            mode="out-in"
            :css="true"
    >
        <slot></slot>
    </transition>
</template>
<style>

</style>
<script>
    import CC from '../../js/ccjs.min'
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            obj: {
                type: Object,
                default: () => {
                    return {
                        transition: {opacity: 1, transition: 'all .7s ease .2s'},
                        enter: {opacity: 0, y: 50},
                        leave: {opacity: 0, transition: 'all .1s ease'},
                        ext: '%'
                    }
                }
            }
        },
        mounted(){
            this.writeCss();
        },
        methods: {
            writeCss(){
                let ext = this.obj.ext || 'px';
                CC.Util.clearKey(this.obj, 'ext');
                CC._.each(this.obj, (v, k) => {
                    CC.Css.smartCss('.' + this.name + '-' + k, v, ext);
                });
            }
        }
    }

</script>