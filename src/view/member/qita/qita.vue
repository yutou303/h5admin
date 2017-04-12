<template>
    <div class="has-hd-container v-member">
        <vheader title="其他资料">
            <router-link to="/member"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card qita-list">
            <vcell border>
                <span slot="left">会员等级</span>
                <span slot="right">金牌会员</span>
            </vcell>
            <vcell border>
                <span slot="left">会员活跃度</span>
                <span slot="right">高</span>
            </vcell>
            <vcell border>
                <span slot="left">注册时间</span>
                <span slot="right">2017-03-16  20:10:31</span>
            </vcell>
            <vcell border>
                <span slot="left">入会方式</span>
                <span slot="right">交易入会</span>
            </vcell>
            <vcell border>
                <span slot="left">续会方式</span>
                <span slot="right">交易续会</span>
            </vcell>
            <vcell border>
                <span slot="left">会员起始日期</span>
                <span slot="right">2016-07-01</span>
            </vcell>
            <vcell border>
                <span slot="left">会员结束日期</span>
                <span slot="right">2018-06-30</span>
            </vcell>
            <vcell border>
                <span slot="left">会员权益</span>
                <span slot="right">无</span>
            </vcell>
            <vcell border>
                <span slot="left">服务专员</span>
                <span slot="right">小刘</span>
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
    @import './qita.styl';
</style>
