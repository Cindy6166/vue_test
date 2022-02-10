// this file used to build a router for this application
import VueRouter from 'vue-router'

// import components
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//create and export a router
const router = new VueRouter({
    routes: [
        {
            name: 'myAbout',
            path: '/about',
            component: About,
            meta: { title: 'ABOUT' }
        },
        {
            name: 'myHome',
            path: '/home',
            component: Home,
            meta: { title: 'HOME' },
            children: [
                {
                    name: 'myNews',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: 'NEWS' },
                    beforeEnter: (to, from, next) => {
                        console.log('before', to, from);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'LaLal') {
                                next()
                            } else {
                                alert('Permission denied, school name is incorrect')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'myMessage',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: 'MESSAGE' },
                    children: [
                        {
                            name: 'myDetail',
                            path: 'detail',
                            component: Detail,
                            meta: { title: 'DETAIL' },
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// global route guard invoke while initial and all switch
// router.beforeEach((to, from, next) => {
//     console.log('before', to, from);
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'LaLal') {
//             next()
//         } else {
//             alert('Permission denied, school name is incorrect')
//         }
//     } else {
//         next()
//     }
// })

router.afterEach((to, from) => {
    console.log('after', to, from)
    document.title = to.meta.title || 'Vue Router Demo'
})

export default router