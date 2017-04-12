<template>
    <div class="has-hd-container has-fd-container v-service">
        <vheader title="服务"></vheader>
        <div class="card serviceList">
            <router-link to="/service/info"
                         tag="div"
                         class="borderTop item">
                <div class="avatar">
                    <img src="../../trade/info/address-bg.png">
                </div>
                <div class="info">
                    <h3>诚e赊</h3>
                    <p>先拿货后分付款，60天账期</p>
                </div>
                <div class="icon iconfont icon-jiantou1"></div>
            </router-link>
            <router-link to="/service/info"
                         tag="div"
                         class="borderTop item">
                <div class="avatar">
                    <img src="../../trade/info/address-bg.png">
                </div>
                <div class="info">
                    <h3>诚e赊</h3>
                    <p>先拿货后分付款，60天账期</p>
                </div>
                <div class="icon iconfont icon-jiantou1"></div>
            </router-link>
        </div>
        <div class="card serviceList">
            <router-link to="/service/info"
                         tag="div"
                         class="borderTop item">
                <div class="avatar">
                    <img src="../../trade/info/address-bg.png">
                </div>
                <div class="info">
                    <h3>诚e赊</h3>
                    <p>先拿货后分付款，60天账期</p>
                </div>
                <div class="icon iconfont icon-jiantou1"></div>
            </router-link>
            <router-link to="/service/info"
                         tag="div"
                         class="borderTop item">
                <div class="avatar">
                    <img src="../../trade/info/address-bg.png">
                </div>
                <div class="info">
                    <h3>诚e赊</h3>
                    <p>先拿货后分付款，60天账期</p>
                </div>
                <div class="icon iconfont icon-jiantou1"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
export default {
    name: 'services',
    data() {
        return {};
    },
    computed: {},
    components: {
        vheader
    }
};
</script>

<style lang="stylus">
    @import './index.styl';
</style>
