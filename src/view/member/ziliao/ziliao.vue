<template>
    <div class="has-hd-container v-member">
        <vheader title="会员资料">
            <router-link to="/member"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card ziliao-list">
            <vcell arrow
                   border
                   type="link"
                   href="/member/ziliao/qiye">
                <span slot="left">企业资料</span>
            </vcell>
            <vcell arrow
                   border
                   type="link"
                   href="/member/ziliao/faren">
                <span slot="left">法人资料</span>
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
    @import './ziliao.styl';
</style>
