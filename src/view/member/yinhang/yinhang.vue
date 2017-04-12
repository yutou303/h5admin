<template>
    <div class="has-hd-container v-member">
        <vheader title="银行账户">
            <router-link to="/member"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card yinhang-list">
            <vcell border>
                <span slot="left">企业名称</span>
                <span slot="right">{{userinfo.companyname?userinfo.companyname:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">银行开户地址</span>
                <span slot="right">{{userinfo.openingAddress?userinfo.openingAddress:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">开户银行</span>
                <span slot="right">{{userinfo.bank?userinfo.bank:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">开户支行</span>
                <span slot="right">{{userinfo.sunBank?userinfo.sunBank:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">银行账号</span>
                <span slot="right">{{userinfo.account?userinfo.account:'未填写'}}</span>
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
        userinfo() {
            let userId = this.$store.getters.userid || localStorage.userid;
            let isEmptyObject = true;
            let oUserInfo = this.$store.getters.userinfo;
            /* eslint no-unused-vars: 0 */
            for (let prop in oUserInfo) {
                isEmptyObject = false;
                break;
            }
            if (isEmptyObject) {
                this.$dialog.loading.open('正在加载中...');
                // 获取用户信息
                this.$http.get('fairpurwebservices/v2/powertools/getuser?userId=' + userId)
                    .then((res) => {
                        this.$store.dispatch('userinfo', res.data);
                        this.$dialog.loading.close();
                        oUserInfo = res.data;
                    })
                    .catch((res) => {
                        // console.log(res);
                        this.$dialog.loading.close();
                        this.$dialog.alert({ mes: '加载失败，请稍后再试！' });
                    });
            }
            return oUserInfo;
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
    @import './yinhang.styl';
</style>
