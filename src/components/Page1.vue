<template>
    <div class="page1">
        <img src="../../img/00_bj.jpg" alt="" class="bg">

        <transition
                name="p1-capy"
                mode="out-in"
                v-bind:css="false"
                v-on:enter="capyEnter"
                v-on:leave="capyLeave"
        >
            <img v-if="capy===1" key="capy1" src="../../img/00_capy1.png" alt="" class="p1-capy1 pa opa">
            <img v-if="capy===2" key="capy2" src="../../img/00_capy2.png" alt="" class="p1-capy2 pa opa">
            <img v-if="capy===3" key="capy3" src="../../img/00_capy3.png" alt="" class="p1-capy3 pa opa">
        </transition>
        <transition
                name="p1-door"
                mode="out-in"
                v-bind:css="false"
                v-on:enter="doorEnter"
                v-on:leave="doorLeave"
        >
            <img v-if="capy===3" key="door" src="../../img/00_door.png" alt="" class="p1-door pa opa">
        </transition>
        <prompt
                class="p1-prompt pa"
                v-if="showPrompt"
                @click.native="onClick">

        </prompt>
    </div>
</template>
<script>
    import Velocity from '../../js/velocity'
    import Prompt from './Prompt.vue'
    export default {
        components: {
            'prompt': Prompt
        },
        data(){
            return {
                capy: 0,
                showPrompt:false
            }
        },
        methods: {
            capyEnter: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '30px'}, 0);
                Velocity(el, {opacity: 1, translateY: '0'}, 500);
                Velocity(el, {opacity: 1}, 500, () => {
                    if (this.capy !== 3) {
                        this.capy++;
                    }
                    done();
                });
            },
            capyLeave: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, done);
            },
            doorEnter: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '-30px', scale: 0.7, transformOrigin: '0 0'}, 0);
                Velocity(el, {opacity: 1, translateY: '0', scale: 1}, {
                    delay: 500,
                    duration: 1200,
                    easing: [.22, .81, .58, .96],
                    complete: ()=>{
                        this.showPrompt=true;
                        done();
                    }
                });
            },
            doorLeave: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, done);
            },
            onClick(e){
                console.log('onclick,el=' + e.target);
                //通知下一页，传参:这一页页码
                this.$emit('next-page',1);
            }

        },
        mounted(){
            setTimeout(() => {
                this.capy = 1;
            }, 1000)
        },

    }
</script>
<style>
    .bg {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: -10;
    }

    .p1-capy1 {
        left: 455px;
        bottom: 70px;

    }

    .p1-capy2 {
        left: 315px;
        bottom: 70px;

    }

    .p1-capy3 {
        left: 274px;
        bottom: 70px;
    }

    .p1-door {
        left: 768px;
        top: 115px;
    }
    .p1-prompt{
        left: 919px;
        top: 315px;
    }
</style>