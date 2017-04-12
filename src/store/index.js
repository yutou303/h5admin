import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
    // 用户登录后获取的 token = token_type + ' ' + access_token
    token: null,
    // 用户登录账号
    userid: null,
    // 用户信息
    userinfo: {},
    // 收付款
    receivedpayment: {},
    // 订单筛选
    /**
    * selecttype 类型
    *   1 --- 供应订单
    *   2 --- 采购订单
    */
    /**
    * selectstate 类型
    *   1 --- 全部
    *   2 --- 待付款
    *   3 --- 待发货
    *   4 --- 待收货
    *   5 --- 退货单
    *   6 --- 退款退货中
    *   7 --- 交易成功
    *   8 --- 交易关闭
    *   9 --- 待评价
    */
    tradeselecttype: 1,
    tradeselectstate: 1,
    // 显示隐藏footer
    footerNavShow: true
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
