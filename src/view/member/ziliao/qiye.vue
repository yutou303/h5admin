<template>
    <div class="has-hd-container v-member">
        <vheader title="企业资料">
            <router-link to="/member/ziliao"
                         slot="left">
                <i class="icon iconfont icon-jiantou"></i>
            </router-link>
        </vheader>
        <div class="card ziliao-list">
            <vcell border>
                <span slot="left">公司名称</span>
                <span slot="right">{{userinfo.companyname?userinfo.companyname:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">企业标志</span>
                <span slot="right"
                      class="qiyelogo">
                                    <img v-if="userinfo.companylogo" :src="userinfo.companylogo">
                                    <img v-else src="../../../assets/no-logo.png">
                            </span>
            </vcell>
            <vcell border>
                <span slot="left">公司电话</span>
                <span slot="right">{{userinfo.companyphone?userinfo.companyphone:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">公司传真</span>
                <span slot="right">{{userinfo.fax?userinfo.fax:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">联系地址</span>
                <span slot="right">{{userinfo.address?userinfo.address:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">邮政编码</span>
                <span slot="right">{{userinfo.postcode?userinfo.postcode:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">公司邮箱</span>
                <span slot="right">{{userinfo.companyemail?userinfo.companyemail:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">经营范围</span>
                <span slot="right">{{userinfo.business?userinfo.business:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">公司网址</span>
                <span slot="right">{{userinfo.homepage?userinfo.homepage:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">工商号码</span>
                <span slot="right">{{userinfo.businessregnum?userinfo.businessregnum:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">注册资本</span>
                <span slot="right">{{userinfo.capital?userinfo.capital:'未填写'}}</span>
            </vcell>
            <vcell border>
                <span slot="left">公司介绍</span>
                <span slot="right">{{userinfo.introduce?userinfo.introduce:'未填写'}}</span>
            </vcell>
        </div>
        <!--<div>{{userinfo}}</div>-->
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
