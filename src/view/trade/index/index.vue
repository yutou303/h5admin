<template>
    <div class="has-hd-container has-fd-container v-trade">
        <vheader title="订单"></vheader>
        <vtradeselect :selecttype="tradeselecttype"
                      :selectstate="tradeselectstate"></vtradeselect>
        <div class="tradeItems">
            <div v-for="(order,index) in orders"
                 key="index"
                 class="card item">
                <div class="item-hd">
                    <div class="">订单编号：{{order.orderId}}</div>
                    <div class="">买家-{{order.buyerCompany}}</div>
                </div>
                <router-link :to="{name:'tradeOrderid',params:{orderid: order.orderId}}"
                             tag="div"
                             class="borderTop item-info">
                    <h3 class="name">{{order.orderName?order.orderName:'无数据'}}</h3>
                    <div class="state">
                        <p>下单时间：{{order.orderTime}}</p>
                        <span>{{order.zstatus?order.zstatus:'无数据'}}</span>
                    </div>
                    <div class="price"><em>￥{{order.amount}}</em></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
import vtradeselect from '../../../components/vtradeselect/vtradeselect.vue';
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
export default {
    name: 'trade',
    data() {
        return {
            orders: []
        };
    },
    computed: {
        tradeselecttype() {
            return this.$store.getters.tradeselecttype;
        },
        tradeselectstate() {
            return this.$store.getters.tradeselectstate;
        }
    },
    mounted() {
        // 当用户刷新页面时，userId 从 localStorage 中取
        let userId = this.$store.getters.userid || localStorage.userid;
        this.$dialog.loading.open('正在加载中...');
        // 获取收付款报表信息
        this.$http.get('fairpurwebservices/v2/powertools/orders/' + userId + '/getOrders', {
            params: {
                dateFrom: '2015-01-01 00:00:00',
                dateEnd: '2018-12-12 00:00:00'
            }
        })
            .then((res) => {
                console.log(res.data);
                this.orders = res.data.orders;
                this.$dialog.loading.close();
                // this.$store.dispatch('receivedpayment', res.data);
            })
            .catch((res) => {
                this.$dialog.loading.close();
                this.$dialog.alert({ mes: '加载失败，请稍后再试！' });
                // console.log(res);
            });
    },
    components: {
        vheader,
        vtradeselect
    }
};
</script>

<style lang="stylus">
    @import './index.styl';
</style>
