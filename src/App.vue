<template>
    <div id="app">
        <div class="container">
            <keep-alive>
                <router-view class="router-view"></router-view>
            </keep-alive>
        </div>
        <vfooter v-show="footerNavShow"></vfooter>
    </div>
</template>

<script>
import vfooter from './components/vfooter/vfooter.vue';
import vheader from './components/vheader/vheader.vue';

import { mapGetters } from 'vuex';

export default {
    name: 'app',
    data() {
        return {
            // transitionName: 'pop-in'
        };
    },
    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'footerNavShow'
        ])
    },
    components: {
        vfooter,
        vheader
    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').length;
            // const fromDepth = from.path.split('/').length;
            if (toDepth > 2) {
                this.$store.dispatch('hideFooterNav');
            } else {
                this.$store.dispatch('showFooterNav');
            }
        }
    }
};
</script>

<style lang="stylus">
#app
    height 100%
    color #333
    .container
        height 100%
    .has-hd-container
        padding-top 0.9rem
    .has-fd-container
        padding-bottom 1.2rem
    .card
        background-color #FFF
        margin-bottom .18rem
    .router-view
        width 100%
        animation-duration 0.5s
        animation-fill-mode both
        backface-visibility hidden
.mask-white-dialog
    .m-loading
        display block
        height auto
        padding .2rem
        text-aling center
        .loading-icon
            width 1rem
            height 1rem
            background-size 100%
            margin 0 auto .15rem
</style>
