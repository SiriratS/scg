import VueRouter from 'vue-router'
import Home from './pages/home/home.vue'
import MyCV from './pages/my-cv/my-cv.vue'
import Restaurants from './pages/restaurants/restaurants.vue'
import SCG from './pages/scg/scg.vue'

export default new VueRouter({
    mode: 'history',
    routes: [    
      { path: '/', component: Home },
      { path: '/my-cv', component: MyCV },
      { path: '/restaurants', component: Restaurants },
      { path: '/scg', component: SCG },
    ]
})