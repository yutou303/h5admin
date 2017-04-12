<template>
    <header class="header-bar">
        <div class="hb-item">
            <slot name="left"></slot>
        </div>
        <div class="hb-center-box">
            <div class="hb-center">
                <slot name="center"><span class="center-title">{{title}}</span></slot>
            </div>
        </div>
        <div class="hb-item">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
export default {
    name: 'vheader',
    props: {
        title: {
            type: String,
            default: '头部标题'
        }
    }
};
</script>

<style lang="stylus">
.header-bar
    position fixed
    top 0
    left 0
    width 100%
    height .9rem
    z-index 100
    display flex
    background-color #c11920
    color #FFF
    .hb-item
        flex 0 0 20%
        white-space nowrap
        overflow hidden
        display flex
        align-items center
        font-size .3rem
        &:first-child
            order 1
            margin-right -20%
        &:last-child
            order 3
            justify-content flex-end
            > a
                justify-content flex-end
        > a
            display flex
            align-items center
            height .9rem
            flex 1
            padding 0 .24rem
            .icon
                font-size .30rem
    .hb-center-box
        order 2
        height .9rem
        width 60%
        margin-left 20%
        .hb-center
            width 100%
            display flex
            justify-content center
            align-items center
            height inherit
            .center-title
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                font-size .3rem
            img
                height 80%

// .back-icon:before, .next-icon:before {
//   display: inline-block;
//   font-family: @iconfont-inlay;
//   font-size: @navbar-icon-fontsize;
//   color: @navbar-icon-color;
// }

// .back-icon:before {
//   content: '\e607';
// }

// .next-icon:before {
//   content: '\e608';
// }

</style>
