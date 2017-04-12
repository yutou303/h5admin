<template>
    <div class="card tradeselect">
        <ul class="type borderTop"
            ref="typeTab">
            <li :class="{'active':selecttype===1}"
                @click="_selecttype(1)">供应订单</li>
            <li :class="{'active':selecttype===2}"
                @click="_selecttype(2)">采购订单</li>
        </ul>
        <div class="borderTop"
             id="statesWrapper"
             ref="states">
            <ul class="states-list"
                ref="stateTab">
                <li :class="{'active':selectstate===1}"
                    @click="_selectstate(1)">全部</li>
                <li :class="{'active':selectstate===2}"
                    @click="_selectstate(2)">待付款</li>
                <li :class="{'active':selectstate===3}"
                    @click="_selectstate(3)">待发货</li>
                <li :class="{'active':selectstate===4}"
                    @click="_selectstate(4)">待收货</li>
                <li :class="{'active':selectstate===5}"
                    @click="_selectstate(5)">退货单</li>
                <li :class="{'active':selectstate===6}"
                    @click="_selectstate(6)">退款退货中</li>
                <li :class="{'active':selectstate===7}"
                    @click="_selectstate(7)">交易成功</li>
                <li :class="{'active':selectstate===8}"
                    @click="_selectstate(8)">交易关闭</li>
                <li :class="{'active':selectstate===9}"
                    @click="_selectstate(9)">待评价</li>
            </ul>
        </div>
        <!--<div class="schWrapper">
    <button type="button"
    class="sch-btn iconfont icon-fangdajing"></button>
    <input type="text"
    class="sch-txt"
    placeholder="请输入买家名称或订单号">
    </div>-->
    </div>
</template>

<script>
import BScroll from 'better-scroll';
/**
* selecttype 类型
*   1 --- 供应订单
*   2 --- 采购订单
*/
/**
* selectstate 类型
*   1 --- 全部
*   2 --- 待付款
*   3 --- 待发货
*   4 --- 待收货
*   5 --- 退货单
*   6 --- 退款退货中
*   7 --- 交易成功
*   8 --- 交易关闭
*   9 --- 待评价
*/
export default {
    props: {
        selecttype: {
            type: Number,
            default: 1
        },
        selectstate: {
            type: Number,
            default: 1
        }
    },
    created() {
        this.$nextTick(() => {
            this._initScroll();
        });
    },
    methods: {
        _initScroll() {
            // 计算list总宽度
            let _length = document.querySelectorAll('.states-list li').length;
            let _liWidth = 0;
            let _margin = 20;
            let _width = 0;
            for (let index = 0; index < _length; index++) {
                _liWidth = document.querySelectorAll('.states-list li')[index].offsetWidth;
                _width += _liWidth;
            }
            document.querySelector('.states-list').style.width = _width + _margin + 'px';

            this.$nextTick(() => {
                this.statesScroll = new BScroll(this.$refs.states, {
                    scrollX: true,
                    eventPassthrough: 'vertical'
                });
            });
        },
        _selecttype(data) {
            this.$store.dispatch('tradeselecttype', data);
            this.$store.dispatch('tradeselectstate', 1);
            this._initScroll();
        },
        _selectstate(data) {
            this.$store.dispatch('tradeselectstate', data);
        }
    }
};
</script>

<style lang="stylus">
    @import './vtradeselect.styl'
</style>
