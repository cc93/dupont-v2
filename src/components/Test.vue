<template>
    <div class="test">
        <!-- page1 -->
        <div class="page1" v-show="currentPage===1">
            <img src="../../img/00_bj.jpg" alt="" class="bg">
            <transition
                    name="p1-capy"
                    mode="out-in"
                    v-bind:css="false"
                    v-on:enter="p1CapyEnter"
                    v-on:leave="p1CapyLeave"
            >
                <img v-if="p1.capy===1" key="capy1" src="../../img/00_capy1.png" alt="" class="p1-capy1 pa opa">
                <img v-if="p1.capy===2" key="capy2" src="../../img/00_capy2.png" alt="" class="p1-capy2 pa opa">
                <img v-if="p1.capy===3" key="capy3" src="../../img/00_capy3.png" alt="" class="p1-capy3 pa opa">
                <img v-if="p1.capy===4" key="capy4" src="../../img/00_capy4.png" alt="" class="p1-capy4 pa opa">
            </transition>
            <transition
                    name="p1-door"
                    mode="out-in"
                    v-bind:css="false"
                    v-on:enter="p1DoorEnter"
                    v-on:leave="p1DoorLeave"
            >
                <img v-show="p1.door" key="door" src="../../img/00_door.png" alt="" class="p1-door pa opa">
            </transition>
            <prompt
                    class="p1-prompt pa"
                    v-show="p1.prompt"
                    @click.native="onClickPrompt"
            >
            </prompt>
        </div>
        <!-- /page1 -->
        <!-- page2 -->
        <div class="page2" v-show="currentPage===2">
            <img src="../../img/bj01.jpg" alt="" class="bg">
            <img src="../../img/01_lamp.png" alt="" class="p2-lamp pa">
            <transition
                    name="p2-capy"
                    v-bind:css="false"
                    v-on:enter="p2CapyEnter"
                    v-on:leave="p2CapyLeave"
            >
                <img v-show="p2.capy===1" src="../../img/01_capy01.png" alt="" class="p2-capy1 pa">
            </transition>
            <prompt
                    v-show="p2.prompt"
                    @click.native="onClickPrompt"
                    class="p2-prompt pa"
            >
            </prompt>
        </div>
        <!-- /page2 -->
        <!-- page3 -->
        <div class="page3" v-show="currentPage===3">
            <img src="../../img/bj05.png" alt="" class="bg">
            <transition
                    name="p3-capy"
                    v-bind:css="false"
                    v-on:enter="p3CapyEnter"
                    v-on:leave="p3CapyLeave"
            >
                <div class="slogan-box pa opa" v-if="p3.capy===1" key="capy1">
                    <img src="../../img/02_capy01.png" alt="" class="p3-capy1 pa">
                </div>
                <img v-if="p3.capy===2" key="capy2" src="../../img/02_capy03.png" alt="" class="p3-capy3 pa opa">
            </transition>
            <prompt
                    class="p3-prompt pa"
                    v-show="p3.prompt"
                    @click.native="onClickPrompt"
                    color="#fc3030"
            >
            </prompt>
        </div>
        <!-- /page3 -->
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
                currentPage: 0,
                p1: {capy: 0, prompt: false, door: false},
                p2: {capy: 0, prompt: false},
                p3: {capy: 0, prompt: false},
            }
        },
        watch: {
            'currentPage': function (currentPage) {
                //触发字幕动画
                this['p' + currentPage]['capy'] = 1;
            }
        },
        mounted(){
            this.currentPage = 1;
        },
        methods: {
            onClickPrompt(e){
                this.currentPage++;
            },
            p1CapyEnter: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '30px'}, 0);
                Velocity(el, {opacity: 1, translateY: '0'}, 500);
                let duration = 500;
                if (this.p1.capy === 4) {
                    duration = 1200;
                }
                Velocity(el, {opacity: 1}, duration, () => {
                    this.p1.capy++;
                    if (this.p1.capy === 3) {
                        this.p1.door = true;
                    }
                    done();
                });
            },
            p1CapyLeave: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, done);
            },
            p1DoorEnter: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '-30px', scale: 0.7, transformOrigin: '0 0'}, 0);
                Velocity(el, {opacity: 1, translateY: '0', scale: 1}, {
                    delay: 500,
                    duration: 1200,
                    easing: [.22, .81, .58, .96],
                    complete: () => {
                        this.p1.prompt = true;
                        done();
                    }
                });
            },
            p1DoorLeave: function (el, done) {
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, done);
            },
            p2CapyEnter(el, done){
                Velocity(el, {opacity: 0, translateY: '30px'}, 0);
                Velocity(el, {opacity: 1, translateY: '0'}, 500);
                Velocity(el, {opacity: 1}, 500, () => {
                    this.p2.capy++;
                    done();
                });
            },
            p2CapyLeave(el, done){
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, () => {
                    this.p2.prompt = true;
                    done();
                });
            },
            p3CapyEnter(el, done){
                Velocity(el, {opacity: 0, translateY: '30px'}, 0);
                let delay = 0;
                if (this.p3.capy === 2) {
                    delay = 500;
                }
                Velocity(el, {opacity: 1, translateY: '0'}, {duration: 500, delay: delay});
                let duration = 500;
                if (this.p3.capy === 1) {
                    duration = 1200;
                }
                Velocity(el, {opacity: 1}, duration, () => {
                    this.p3.capy++;
                    done();
                });
            },
            p3CapyLeave(el, done){
                Velocity(el, {opacity: 0, translateY: '-30px'}, 500, () => {
                    if(this.p3.capy===3){
                        this.p3.prompt = true;
                    }
                    done();
                });
            },
        }

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

    .p1-capy4 {
        left: 212px;
        bottom: 70px;
    }

    .p1-door {
        left: 768px;
        top: 115px;
    }

    .p1-prompt {
        left: 919px;
        top: 315px;
    }

    .p2-lamp {
        left: 648px;
        top: 36px;
    }

    .p2-capy1 {
        left: 440px;
        bottom: 70px;
    }

    .p2-prompt {
        left: 644px;
        top: 100px;
    }

    .slogan-box {
        width: 100%;
        height: 86px;
        left: 0;
        bottom: 42px;
        background: url(../../img/02_capy02.png) 0 0 no-repeat;
    }

    .p3-capy1 {
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .p3-capy3 {
        left: 440px;
        bottom: 70px;
    }

    .p3-prompt{
        left: 428px;
        top: 437px;
    }
</style>