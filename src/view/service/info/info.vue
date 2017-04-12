<template>
    <div class="has-hd-container v-service">
        <vheader title="服务详情">
            <router-link to="/service"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card service-info">
            <div class="sliderWrapp">
                <yd-slider autoplay="3000">
                    <yd-slider-item>
                        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                    </yd-slider-item>
                    <yd-slider-item>
                        <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                    </yd-slider-item>
                    <yd-slider-item>
                        <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                    </yd-slider-item>
                </yd-slider>
            </div>
            <div class="disc">
                <vcell border>
                    <span slot="left">产品代码</span>
                    <span slot="right">j9183821</span>
                </vcell>
                <vcell border>
                    <span slot="left">产品名称</span>
                    <span slot="right">几何金融</span>
                </vcell>
                <vcell border>
                    <span slot="left">服务商</span>
                    <span slot="right">几何金融</span>
                </vcell>
                <vcell border>
                    <span slot="left">联系方式</span>
                    <span slot="right">0755-83682648</span>
                </vcell>
                <vcell border>
                    <span slot="left">服务价格</span>
                    <span slot="right">货押账期60天 ，月利率1%</span>
                </vcell>
                <vcell border>
                    <span slot="left">服务内容</span>
                    <span slot="right">先订购货物，然后从质押仓库分批取货付款 ，最长账期60天</span>
                </vcell>
                <vcell border>
                    <span slot="left">服务备注</span>
                    <span slot="right">先拿货后付款，60天账期</span>
                </vcell>
            </div>
        </div>
        <div class="service-handle">
            <p class="agreement">具体服务协议请查看
                <router-link to="/service/info/agreement">《诚e赊金融服务协议》</router-link>
            </p>
            <button class="btn-block btn-primary">我要申请</button>
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
        ...mapGetters([
            'totalNum'
        ])
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
    @import './info.styl';
</style>
