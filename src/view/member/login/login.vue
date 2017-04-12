<template>
    <div class="v-login">
        <div class="logo">
            <img src="./logo.png">
            <p>会员登录</p>
        </div>
        <div class="form">
            <div class="cell borderTop">
                <div class="cell-left"><i class="icon iconfont icon-wo"></i></div>
                <div class="cell-right">
                    <input type="text"
                           v-model="username"
                           placeholder="请输入用户名">
                </div>
            </div>
            <div class="cell borderTop">
                <div class="cell-left"><i class="icon iconfont icon-Secret"></i></div>
                <div class="cell-right">
                    <input type="password"
                           v-model="password"
                           placeholder="请输入密码">
                </div>
            </div>
            <div class="form-link">
                <div class="left">
                    <router-link to="">我要注册</router-link>
                </div>
                <div class="right">
                    <router-link to="">忘记密码？</router-link>
                </div>
            </div>
            <button type="button"
                    class="btn-block btn-danger"
                    @click="login">登 录</button>
        </div>
        <div class="slogan"><img src="./slogan.png"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: 'service_01@fairpur.com',
            password: 'q1w2e3r4',
            client_id: 'yinhao',
            client_secret: '123456',
            grant_type: 'password'
        };
    },
    mounted() {
        this.$store.dispatch('hideFooterNav');
    },
    methods: {
        login() {
            if (!!this.username && !!this.password) {
                this.$dialog.loading.open('努力登录中...');
                this.$http.post('/authorizationserver/oauth/token', {
                    client_id: this.client_id,
                    client_secret: this.client_secret,
                    grant_type: this.grant_type,
                    username: this.username,
                    password: this.password
                })
                    .then((res) => {
                        // console.log(res);
                        let token = res.data.token_type + ' ' + res.data.access_token;
                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                        this.$store.dispatch('login', token);
                        this.$store.dispatch('userid', this.username);
                        this.$dialog.loading.close();
                        this.$router.push({
                            path: redirect
                        });
                    })
                    .catch((res) => {
                        // console.log(res);
                        this.$dialog.loading.close();
                        this.$dialog.alert({ mes: '登录失败，请确认用户名或密码是否正确！' });
                    });
            } else {
                this.$dialog.alert({ mes: '登录失败，请确认用户名或密码是否正确！' });
            }
        }
    }
};
</script>
<style lang="stylus">
@import './login.styl';
</style>
