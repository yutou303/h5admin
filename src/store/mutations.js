/**
 * 更改 store 事件动作
 */

import * as types from './mutation-types';

export default {
    [types.LOGIN](state, data) {
        localStorage.token = data;
        state.token = data;
    },
    [types.LOGOUT](state) {
        localStorage.removeItem('token');
        state.token = null;
    },
    [types.USERID](state, data) {
        localStorage.userid = data;
        state.userid = data;
    },
    [types.USERINFO](state, data) {
        state.userinfo = data;
    },
    [types.RECEIVEDPAYMENT](state, data) {
        state.receivedpayment = data;
    },
    [types.TRADESELECTTYPE](state, data) {
        state.tradeselecttype = data;
    },
    [types.TRADESELECTSTATE](state, data) {
        state.tradeselectstate = data;
    },
    [types.SHOW_FOOTER_NAV](state) {
        state.footerNavShow = true;
    },
    [types.HIDE_FOOTER_NAV](state) {
        state.footerNavShow = false;
    }
};
