<template>
    <footer class="footer-bar">
        <ul>
            <router-link tag="li"
                         to="/"
                         exact>
                <a>
                    <i class="icon iconfont icon-shouye-shouye"></i>
                    <span>首页</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/trade">
                <a>
                    <i class="icon iconfont icon-dingdan"></i>
                    <span>订单</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/service"
                         exact>
                <a>
                    <i class="icon iconfont icon-jinlingyingcaiwangtubiao40"></i>
                    <span>服务</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/member">
                <a>
                    <i class="icon iconfont icon-wo"></i>
                    <span>我的</span>
                </a>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'vfooter',
    methods: {
        // goBack() {
        //     this.$router.go(-1);
        // }
    }
};
</script>

<style lang="stylus">
.footer-bar
  width 100%
  position fixed
  left 0px
  bottom 0px
  z-index 100
  align-items center
  background-color rgb(193,25,32)
  ul
    display flex
    li
        display flex
        flex 1
        flex-direction column
        justify-content center
        a
            display block
            padding .10rem 0
            color #FFF
            font-size .24rem
            text-align center
        .icon
            font-size .5rem
            display block
            margin 0 auto
        span
            display block
        &.active
            a
                background-color #a4060c
</style>
