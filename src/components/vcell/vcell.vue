<template>
    <router-link class="cell"
                 :class="classes"
                 :to="href"
                 v-if="type == 'link'">
        <div class="cellLeft">
            <slot name="left"></slot>
        </div>
        <div class="cellRight"
             v-if="checkRight">
            <slot name="right"></slot>
        </div>
        <div class="icon iconfont icon-jiantou1"
             v-if="arrow"></div>
    </router-link>
    <div class="cell"
         :class="classes"
         v-else>
        <div class="cellLeft">
            <slot name="left"></slot>
        </div>
        <div class="cellRight"
             v-if="checkRight">
            <slot name="right"></slot>
        </div>
        <div class="icon iconfont icon-jiantou1"
             v-if="arrow"></div>
    </div>
</template>

<script>
export default {
    name: 'cell-item',
    data() {
        return {
            classAll: ''
        };
    },
    props: {
        type: {
            type: String,
            default: 'div'
        },
        arrow: {
            type: Boolean,
            default: false
        },
        href: {
            type: [String, Object]
        },
        border: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        checkRight() {
            return !!this.$slots.right;
        },
        classes() {
            let hasBorder = this.border ? 'borderTop' : '';
            let alignCenter = this.arrow ? 'align-items-center' : '';
            this.classAll = hasBorder + ' ' + alignCenter;
            return this.classAll;
        }
    }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl';
.cell
    position relative
    display flex
    justify-content space-between
    padding 0 .24rem
    padding .3rem .25rem
    font-size .28rem
    color #5d5d5d
    .cellLeft
        color #a0a0a0
    .cellRight
        flex 1
        text-align right
        margin-left .2rem
    .icon-jiantou1
        color #999
        margin-left .05rem
    &.align-items-center
        align-items center
        .cellLeft
            color #5d5d5d
    &.borderTop
        borderTop(1px,#e6e6e6)
</style>
