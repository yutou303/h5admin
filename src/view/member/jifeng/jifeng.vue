<template>
    <div class="has-hd-container v-member">
        <vheader title="会员积分">
            <router-link to="/member"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card jifeng-list">
            <vcell border>
                <span slot="left">可用积分</span>
                <span slot="right"><em class="red">18</em> 分</span>
            </vcell>
            <vcell border>
                <span slot="left">累计积分</span>
                <span slot="right"><em>{{receivedpayment.totalPoints}}</em> 分</span>
            </vcell>
            <vcell border>
                <span slot="left">消费积分</span>
                <span slot="right"><em>{{receivedpayment.totalPointsCosume}}</em> 分</span>
            </vcell>
            <vcell border>
                <span slot="left">积分有效期</span>
                <span slot="right"><em>2018年12月12日</em></span>
            </vcell>
        </div>
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
import vcell from '../../../components/vcell/vcell.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'tradeinfo',
    data() {
        return {};
    },
    computed: {
        receivedpayment() {
            let userId = this.$store.getters.userid || localStorage.userid;
            let isEmptyObject = true;
            let oRPM = this.$store.getters.receivedpayment;
            /* eslint no-unused-vars: 0 */
            for (let prop in oRPM) {
                isEmptyObject = false;
                break;
            }
            if (isEmptyObject) {
                this.$dialog.loading.open('正在加载中...');
                // 获取收付款报表信息
                this.$http.get('fairpurwebservices/v2/powertools/orders/' + userId + '/getReceivedPayment', {
                    params: {
                        dateFrom: '2015-01-01 00:00:00',
                        dateEnd: '2018-12-12 00:00:00'
                    }
                })
                    .then((res) => {
                        this.$dialog.loading.close();
                        this.$store.dispatch('receivedpayment', res.data);
                    })
                    .catch((res) => {
                        this.$dialog.loading.close();
                        this.$dialog.alert({ mes: '加载失败，请稍后再试！' });
                    });
            }
            return oRPM;
        }
    },
    methods: {},
    mounted() {
        this.$store.dispatch('hideFooterNav');
    },
    components: {
        vheader,
        vcell
    }
};
</script>

<style lang="stylus">
    @import './jifeng.styl';
</style>
