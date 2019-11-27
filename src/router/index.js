import Vue from 'vue'
import Router from 'vue-router'
import myorder from '@/pages/myorder'
import top from '@/components/top'
import foot from '@/components/foot'
import shoppingcart from '@/pages/shoppingcart'
import lalaland from "@/pages/lalaland"
// 马静涵
import footer from '@/components/footer'
import setup from '@/components/setup'
// 陈晓芳
import denglu from '@/components/denglu'
import shouye from '@/components/shouye'
import shouye1 from '@/components/shouye1'
import detail from '@/components/detail'
import login from '@/components/login'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'myorder',
            component: myorder
        },
        {
            path: '/top',
            name: 'top',
            component: top
        },
        {
            path: '/foot',
            name: 'foot',
            component: foot
        },
        {
            path: '/shoppingcart',
            name: 'shoppingcart',
            component: shoppingcart
        },
        {
            path: '/lalaland',
            name: 'lalaland',
            component: lalaland
        },
        {
            path: '/footer',
            name: 'fooer',
            component: footer
        },
        {
            path: '/setup',
            name: 'setup',
            component: setup
        },
        {
            path: '/denglu',
            name: 'denglu',
            component: denglu
        },
        {
            path: '/shouye',
            name: 'shouye',
            component: shouye
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },

        {
            path: '/shouye1',
            name: 'shouye1',
            component: shouye1
        }
    ]
})