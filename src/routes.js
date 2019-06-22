import VueRouter from 'vue-router'
import CV from './pages/cv/cv.vue'
import Restaurants from './pages/restaurants/restaurants.vue'
import SCG from './pages/scg/scg.vue'

export default new VueRouter({
    mode: 'history',
    routes: [    
      { path: '/', component: SCG },
      { path: '/cv', component: CV },
      { path: '/restaurants', component: Restaurants }
    ]
})