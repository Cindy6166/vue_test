// this file used to build a router for this application
import VueRouter from 'vue-router'

// import components
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//create and export a router
export default new VueRouter({
    routes: [
        {
            name:'myAbout',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'myDetail',
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})