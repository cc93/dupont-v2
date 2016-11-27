<template>
    <div class="test">
        <page1 v-show="currentPage===1" @next-page="onNextPage"></page1>
        <page2 v-show="currentPage===2" @next-page="onNextPage"></page2>
    </div>
</template>
<style>

</style>
<script>
    import Page1 from './Page1.vue'
    export default {
        components: {
            'page1': Page1
        },
        data(){
            return {
                currentPage:0
            }
        },
        mounted(){
        },
        methods:{
            onNextPage(mes){
                this.currentPage++;
            }
        }

    }
</script>