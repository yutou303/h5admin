<template>
    <div class="has-hd-container home">
        <vheader title="首页"></vheader>
        <h1>{{ msg }}</h1>
        <p>{{ num }}</p>
        <input type="button"
               @click="_getSouce"
               value="点我">
        <input type="button"
               @click="_addTotalNum"
               value="加1">
        <input type="button"
               @click="_delTotalNum"
               value="减1">
    </div>
</template>

<script>
import vheader from '../../../components/vheader/vheader.vue';
export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome home App',
            souce: ''
        };
    },
    computed: {
        num() {
            return this.$store.state.totalNum;
        }
    },
    methods: {
        _getSouce() {
            this.$http.get('/api/repos/typecho-fans/plugins/readme')
                .then((res) => {
                    console.log(res);
                })
                .catch((res) => {
                    console.log(res);
                });
        },
        _delTotalNum() {
            this.$store.dispatch('delTotalNum');
        },
        _addTotalNum() {
            this.$store.dispatch('addTotalNum');
        }
    },
    components: {
        vheader
    }
};
</script>

<style lang="stylus">
    @import '../../../common/stylus/variables.styl'
    .home
        background: red
        color: #FFF
    h1
        font-size 20px
        color red
        margin 20px 0
</style>
