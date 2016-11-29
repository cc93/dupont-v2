<template>
    <div class="page2">
        <img src="../../img/bj01.jpg" alt="" class="bg">
        <img src="../../img/01_lamp.png" alt="" class="p2-lamp pa">
        <transition
                name="p2-capy"
                v-bind:css="false"
                v-on:enter="capyEnter"
                v-on:leave="capyLeave"
        >
            <img v-show="capy===1" key="capy1" src="../../img/01_capy01.png" alt="" class="p2-capy1 pa">
        </transition>
        <prompt
                v-show="showPrompt"
                @click.native="onClick"
                class="p2-prompt pa"
        >
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
                Velocity(el, {opacity: 1}, 500, () => {
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

</style>
