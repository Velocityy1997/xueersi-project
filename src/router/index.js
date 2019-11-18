import Vue from 'vue'
import Router from 'vue-router'
import myorder from '@/pages/myorder'
import top from '@/components/top'
import foot from '@/components/foot'

Vue.use(Router)

export default new Router({
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
        }
    ]
})