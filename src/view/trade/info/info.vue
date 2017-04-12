<template>
    <div class="has-hd-container v-trade">
        <vheader title="订单详情">
            <router-link to="/trade"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card">
            <div class="borderTop order-num">
                <div class="num">订单号：<em>4839058904385</em></div>
                <div class="states">待发货</div>
            </div>
            <div class="addresswrapper">
                <div class="content">
                    <div class="field">
                        <p class="th">收货人：</p>
                        <p class="td">杨柳柳</p>
                    </div>
                    <div class="field">
                        <p class="th">联系电话：</p>
                        <p class="td">2131313</p>
                    </div>
                    <div class="field">
                        <p class="th">收货地址：</p>
                        <p class="td">广东省 深圳市 福田区 车公庙泰然六路雪松大厦 3D</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card buyerWrapper">
            <div class="buyer">买家-濠成冷链有限公司</div>
            <div class="borderTop goods">
                <div class="img">
                    <img src="./address-bg.png">
                </div>
                <div class="info">
                    <h3 class="goods-name">新西兰203厂进口牛眼肉2003批有次多行啊多行啊多行啊</h3>
                    <div class="goods-price">
                        <p class="unit">单位：吨</p>
                        <p class="price"><em>￥485582,000.00</em> x 2</p>
                    </div>
                </div>
            </div>
            <div class="borderTop goods">
                <div class="img">
                    <img src="./address-bg.png">
                </div>
                <div class="info">
                    <h3 class="goods-name">新西兰203厂进口牛眼肉2003批有次多行啊多行啊多行啊</h3>
                    <div class="goods-price">
                        <p class="unit">单位：吨</p>
                        <p class="price"><em>￥485582,000.00</em> x 2</p>
                    </div>
                </div>
            </div>
            <div class="borderTop bTr">
                <p class="th">货品总价：</p>
                <p class="price">￥42,000.00</p>
            </div>
            <div class="borderTop bTr">
                <p class="th">运费：</p>
                <p class="price">￥42,000.00</p>
            </div>
        </div>
        <div class="tradeTotal">
            <div class="info">
                <p>订单应付金额：</p>
                <em>￥42,000.00</em>
            </div>
            <div class="handle">
                <button class="btn btn-primary">立即发货</button>
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
    @import './info.styl';
</style>
