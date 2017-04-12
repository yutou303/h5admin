/**
 * 包含异步操作处理数据
 * 去触发事件和传入参数
 */

import * as types from './mutation-types';

export default {
    login({ commit }, data) {
        commit(types.LOGIN, data);
    },
    logout({ commit }) {
        commit(types.LOGOUT);
    },
    userid({ commit }, data) {
        commit(types.USERID, data);
    },
    userinfo({ commit }, data) {
        commit(types.USERINFO, data);
    },
    tradeselecttype({ commit }, data) {
        commit(types.TRADESELECTTYPE, data);
    },
    tradeselectstate({ commit }, data) {
        commit(types.TRADESELECTSTATE, data);
    },
    receivedpayment({ commit }, data) {
        commit(types.RECEIVEDPAYMENT, data);
    },
    showFooterNav({ commit }) {
        commit(types.SHOW_FOOTER_NAV);
    },
    hideFooterNav({ commit }) {
        commit(types.HIDE_FOOTER_NAV);
    }
};
