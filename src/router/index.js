import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';
import * as types from '../store/mutation-types';

import home from '@/view/home/index/index.vue';
import member from '@/view/member/index/index.vue';
import jifeng from '@/view/member/jifeng/jifeng.vue';
import ziliao from '@/view/member/ziliao/ziliao.vue';
import qiye from '@/view/member/ziliao/qiye.vue';
import faren from '@/view/member/ziliao/faren.vue';
import yinhang from '@/view/member/yinhang/yinhang.vue';
import fuwu from '@/view/member/fuwu/fuwu.vue';
import qita from '@/view/member/qita/qita.vue';
import login from '@/view/member/login/login.vue';
import msg from '@/view/msg/index/index.vue';
import trade from '@/view/trade/index/index.vue';
import tradeInfo from '@/view/trade/info/info.vue';
import service from '@/view/service/index/index.vue';
import serviceInfo from '@/view/service/info/info.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      // 添加该字段，表示进入这个路由是需要登录的
      requireAuth: true
    }
  },
  {
    path: '/trade',
    name: 'trade',
    component: trade,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/trade/:orderid',
    name: 'tradeOrderid',
    component: tradeInfo,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/service',
    name: 'service',
    component: service,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/service/:id',
    name: 'serviceInfo',
    component: serviceInfo,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/msg',
    name: 'msg',
    component: msg,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member',
    name: 'member',
    component: member,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/jifeng',
    name: 'jifeng',
    component: jifeng,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/ziliao',
    name: 'ziliao',
    component: ziliao,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/ziliao/qiye',
    name: 'qiye',
    component: qiye,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/ziliao/faren',
    name: 'faren',
    component: faren,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/yinhang',
    name: 'yinhang',
    component: yinhang,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/fuwu',
    name: 'fuwu',
    component: fuwu,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/member/qita',
    name: 'qita',
    component: qita,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '*',
    redirect: {
      name: 'login'
    }
  }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'));
};

const router = new Router({
  linkActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(r => r.meta.requireAuth)) {
    // 通过vuex state获取当前的token是否存在
    if (store.state.token) {
      next();
    } else {
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    };
  } else {
    next();
  };
});

export default router;
