// this file used to build a router for this application
import VueRouter from 'vue-router'

// import components
import Home from '../components/Home'
import About from '../components/About'

//create and export a router
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

// export default router