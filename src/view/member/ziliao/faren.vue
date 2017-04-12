<template>
    <div class="has-hd-container v-member">
        <vheader title="法人资料">
            <router-link to="/member/ziliao"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card ziliao-list">
            <vcell border>
                <span slot="left">法人代表</span>
                <span slot="right">{{userinfo.legalperson?userinfo.legalperson:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">证件类型</span>
                <span slot="right">{{userinfo.legalcardnum?userinfo.legalcardnum:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">证件号码</span>
                <span slot="right">{{userinfo.legalcardnum?userinfo.legalcardnum:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">证件有效期</span>
                <span slot="right">{{userinfo.cardvalid?userinfo.cardvalid:'未填写'}}</span>
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
    @import './ziliao.styl';
</style>
