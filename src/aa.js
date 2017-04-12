// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './http';

import store from './store';

/**
 * 引入ui组件
 */
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);

/**
 * 引入自己的iconfont
 */
import './common/stylus/iconfont.styl';

Vue.config.productionTip = false;

// 将axios挂载到prototype上，在组件中可以直接使用this.$http访问
Vue.$http = Vue.prototype.$http = axios;

/* eslint-disable */
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
