<template>
    <div class="has-hd-container v-member">
        <vheader title="我的服务">
            <router-link to="/member"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card fuwu-list">
            <div class="borderTop item">
                <div class="avatar">
                    <img src="../../trade/info/address-bg.png">
                </div>
                <div class="info">
                    <div class="t">
                        <h3>诚e赊</h3>
                        <div class="fuwuState red">申请中</div>
                    </div>
                    <p class="dic">先拿货后分付款，60天账期</p>
                    <div class="t">
                        <p class="flex1">服务商：创捷科技</p>
                        <P class="flex1">申请人：创捷科技</P>
                    </div>
                </div>
            </div>
        </div>
        <div class="card fuwu-list">
            <div class="borderTop item">
                <div class="avatar">
                    <img src="../../trade/info/address-bg.png">
                </div>
                <div class="info">
                    <div class="t">
                        <h3>诚e赊</h3>
                        <div class="fuwuState red">申请中</div>
                    </div>
                    <p class="dic">先拿货后分付款，60天账期</p>
                    <div class="t">
                        <p class="flex1">服务商：创捷科技</p>
                        <P class="flex1">申请人：创捷科技</P>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'tradeinfo',
    data() {
        return {};
    },
    computed: {
        ...mapGetters([
            'totalNum'
        ])
    },
    methods: {},
    mounted() {
        this.$store.dispatch('hideFooterNav');
    },
    components: {
        vheader
    }
};
</script>

<style lang="stylus">
    @import './fuwu.styl';
</style>
