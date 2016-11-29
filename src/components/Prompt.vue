<template>
    <div class="prompt pr">
        <div class="prompt-1 pa" :style="{background: color}"></div>
        <div class="prompt-2 pa" ref="prompt2" :style="{background: color}"></div>
    </div>
</template>
<script>
    import CC from '../../js/ccjs.min'
    export default {
        props: {
            color: {
                type: String,
                default: '#cccdd0'
            }
        },
        mounted(){
            CC.Css.smartCssAnimation('promptInflate', [{
                width: 20,
                height: 20,
                opacity: 0.9
            }, {
                width: 60,
                height: 60,
                opacity: 0.1
            }, {
                opacity: 0
            }], 'px');
            CC.Css.smartStyle(this.$refs.prompt2, {animation: 'promptInflate 1.2s linear infinite'}, 'px');
        },
        methods: {
//            onClick(e){
//                this.$emit('click',e);
//            }
        }
    }

</script>
<style>
    .prompt {
        width: 80px;
        height: 80px;
    }

    .prompt-1 {
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #cccdd0;
        opacity: 0.9;
    }

    .prompt-2 {
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #cccdd0;
    }

</style>