/**
 * Created by congcong on 9/7/16.
 */
import Test from './components/Test.vue';

//FastClick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//Vue
new Vue({
    el: '#app',
    components: {
        'test': Test
    }
});
