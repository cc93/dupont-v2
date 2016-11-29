<template>
    <div class="test">
        <keep-alive>
            <!-- 非活动组件将被缓存！ -->
            <component :is="currentPageView" @next-page="onNextPage">
            </component>
        </keep-alive>
    </div>
</template>
<style>

</style>
<script>
    import Page1 from './Page1.vue'
    import Page2 from './Page2.vue'
    export default {
        components: {
            'page1': Page1,
            'page2': Page2
        },
        data(){
            return {
                currentPageView: 'page1',
                currentPage: 1
            }
        },
        mounted(){
        },
        methods: {
            onNextPage(mes){
                console.log('mes = ' + mes);
                this.currentPage = mes;
                this.currentPage++;
                this.currentPageView = 'page' + this.currentPage;
            }
        }

    }
</script>