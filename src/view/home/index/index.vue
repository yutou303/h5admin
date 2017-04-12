<template>
    <div class="has-hd-container has-fd-container v-home">
        <vheader title="首页"></vheader>
        <section class="card company-info">
            <div class="company-head">
                <img v-if="userinfo.companylogo"
                     :src="userinfo.companylogo"
                     class="company-logo">
                <img v-else
                     src="../../../assets/no-logo.png"
                     class="company-logo">
                <h1 class="company-name">{{userinfo.companyname}}</h1>
            </div>
            <vline></vline>
            <div class="company-column">
                <div>
                    <em>{{memberLevel}}</em>
                    <p>会员等级</p>
                </div>
                <div>
                    <em>{{memberExpiryDate}}</em>
                    <p>会员有效期</p>
                </div>
                <div>
                    <em>{{receivedpayment.totalPoints}}</em>
                    <p>会员积分</p>
                </div>
                <div>
                    <em>{{pointsExpiryDate}}</em>
                    <p>积分有效期</p>
                </div>
            </div>
        </section>
        <section class="card company-business">
            <div class="business-type">
                <h3>销售管理</h3>
            </div>
            <vline></vline>
            <div class="business-info">
                <div class="total">
                    <p>销售总额</p>
                    <em>{{receivedpayment.totalAccount}}</em>
                </div>
                <div class="company-column">
                    <div class="borderLeft">
                        <p>总订单</p>
                        <em>2033</em>
                    </div>
                    <div class="borderLeft">
                        <p>处理中订单</p>
                        <em>2033</em>
                    </div>
                    <div class="borderLeft">
                        <p>已完成订单</p>
                        <em>2033</em>
                    </div>
                    <div class="borderLeft">
                        <p>问题订单</p>
                        <em>2033</em>
                    </div>
                </div>
                <div class="more">
                    <router-link to="/trade">查看订单详情></router-link>
                </div>
            </div>
        </section>
        <section class="card company-business">
            <div class="business-type">
                <h3>采购管理</h3>
            </div>
            <vline></vline>
            <div class="business-info">
                <div class="total">
                    <p>采购支出</p>
                    <em>{{receivedpayment.totalPay}}</em>
                </div>
                <div class="company-column">
                    <div class="borderLeft">
                        <p>总订单</p>
                        <em>2033</em>
                    </div>
                    <div class="borderLeft">
                        <p>处理中订单</p>
                        <em>2033</em>
                    </div>
                    <div class="borderLeft">
                        <p>已完成订单</p>
                        <em>2033</em>
                    </div>
                    <div class="borderLeft">
                        <p>问题订单</p>
                        <em>2033</em>
                    </div>
                </div>
                <div class="more">
                    <router-link to="/trade">查看订单详情></router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
import vline from '../../../components/vline/vline.vue';
export default {
    name: 'home',
    data() {
        return {
            memberLevel: '金牌',
            memberExpiryDate: '365天',
            pointsExpiryDate: '2017/08/15'
        };
    },
    computed: {
        userinfo() {
            return this.$store.getters.userinfo;
        },
        receivedpayment() {
            return this.$store.getters.receivedpayment;
        }
    },
    mounted() {
        // 当用户刷新页面时，userId 从 localStorage 中取
        let userId = this.$store.getters.userid || localStorage.userid;
        this.$dialog.loading.open('正在加载中...');
        // 获取用户信息
        this.$http.get('fairpurwebservices/v2/powertools/getuser?userId=' + userId)
            .then((res) => {
                this.$store.dispatch('userinfo', res.data);
                this.$dialog.loading.close();
            })
            .catch((res) => {
                // console.log(res);
                this.$dialog.loading.close();
                this.$dialog.alert({ mes: '加载失败，请稍后再试！' });
            });
        // 获取收付款报表信息
        this.$http.get('fairpurwebservices/v2/powertools/orders/' + userId + '/getReceivedPayment', {
            params: {
                dateFrom: '2015-01-01 00:00:00',
                dateEnd: '2018-12-12 00:00:00'
            }
        })
            .then((res) => {
                // console.log(res);
                this.$dialog.loading.close();
                this.$store.dispatch('receivedpayment', res.data);
            })
            .catch((res) => {
                this.$dialog.loading.close();
                this.$dialog.alert({ mes: '加载失败，请稍后再试！' });
                // console.log(res);
            });
    },
    methods: {
    },
    components: {
        vheader,
        vline
    }
};
</script>

<style lang="stylus">
    @import './index.styl';
</style>
