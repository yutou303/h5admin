<template>
    <div class="has-hd-container has-fd-container v-member">
        <vheader title="我的"></vheader>
        <div class="card member-info">
            <div class="avatar">
                <!--<img src="../../../assets/no-avatar.png">-->
                <img v-if="userinfo.useravatar"
                     :src="userinfo.useravatar">
                <img v-else
                     src="../../../assets/no-avatar.png">
            </div>
            <div class="name">{{name}}</div>
            <div class="isonline">状态：在线</div>
            <div class="lastLoad">最后登陆日期：2017-03-21</div>
        </div>
        <div class="card userfull-link">
            <router-link to="/member/jifeng"
                         class="link">
                <i class="icon iconfont icon-jifen"></i>
                <p>会员积分</p>
            </router-link>
            <router-link to="/member/ziliao"
                         class="link">
                <i class="icon iconfont icon-wodeziliao"></i>
                <p>会员资料</p>
            </router-link>
            <router-link to="/member/yinhang"
                         class="link">
                <i class="icon iconfont icon-yinxing-copy"></i>
                <p>银行账户</p>
            </router-link>
            <router-link to="/member/fuwu"
                         class="link">
                <i class="icon iconfont icon-fuwu"></i>
                <p>我的服务</p>
            </router-link>
        </div>
        <div class="card">
            <vcell arrow
                   type="link"
                   href="/member/qita">
                <span slot="left">其他资料</span>
            </vcell>
        </div>
        <!--<div>{{userinfo}}</div>-->
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
import vcell from '../../../components/vcell/vcell.vue';
export default {
    name: 'member',
    data() {
        return {
            name: 'admin'
        };
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
    components: {
        vheader,
        vcell
    }
};
</script>

<style lang="stylus">
    @import './index.styl';
</style>
