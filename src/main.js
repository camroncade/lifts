import Vue from 'vue'
import App from './App.vue'
import Workouts from './Workouts.vue'
import Workout from './Workout.vue'
import Lifts from './Lifts.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/workouts', component: Workouts },
    { path: '/workouts/:id', component: Workout },
    { path: '/lifts', component: Lifts },
  ],
  linkActiveClass: 'is-active',
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
