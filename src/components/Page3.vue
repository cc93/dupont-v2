<template>
<div class="page3">
    <img src="../../img/bj05.png" alt="" class="bg">
    <img src="../../img/01_lamp.png" alt="" class="p2-lamp pa">
    <transition
            name="p3-capy"
            v-bind:css="false"
            v-on:enter="capyEnter"
            v-on:leave="capyLeave"
    >
        <img v-if="capy===1" key="capy1" src="../../img/02_capy01.png" alt="" class="p3-capy1 pa">
        <img v-if="capy===2" key="capy2" src="../../img/02_capy03.png" alt="" class="p3-capy3 pa">
    </transition>
    <prompt
            v-show="showPrompt"
            @click.native="onClick"
            class="p3-prompt pa"
    >
    </prompt>
</div>
</template>
<script>
    export default {
        components: {
            'prompt': Prompt
        },
        data(){
            return {
                capy: 0,
                showPrompt: false
            }
        },
        mounted(){
        },
        activated(){
            this.capy = 1;
        },
        methods: {
            capyEnter(el, done){
                Velocity(el, {opacity: 0, translateY: '30px'}, 0);
                Velocity(el, {opacity: 1, translateY: '0'}, 500);
                Velocity(el, {opacity: 1}, 1500, () => {
                    this.capy++;
                    done();
                });
            },
            capyLeave(el, done){
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, () => {
                    this.showPrompt = true;
                    done();
                });
            },
            onClick(e){
                //通知下一页，传参:这一页页码
                this.$emit('next-page', 2);
            }

        },

    }
</script>
<style>
    .p3-capy1{
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .p3-capy3{
        left: 440px;
        bottom: 70px;
    }
</style>
