/**
 * http配置
 */
import axios from 'axios';
import store from './store/index';
import * as types from './store/mutation-types';
import router from './router';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';

// http 在发送请求之前对请求数据做处理，比如form-data格式化等
axios.defaults.transformRequest = [function (data) {
    let ret = '';
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
    }
    return ret;
}];

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data);
    });

export default axios;
