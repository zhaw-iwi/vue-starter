import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/persons',
    name: 'Persons',
    component: () => import( '../views/Persons.vue')
  },
  {
    path: '/persons/:id',
    name: 'PersonDetails',
    component: () => import( '../views/PersonDetails.vue')
  },
  {
    path: '/create-person',
    name: 'CreatePerson',
    component: () => import( '../views/CreatePerson.vue')
  },
  {
    path: '/pathogens',
    name: 'Pathogens',
    component: () => import( '../views/Pathogens.vue')
  },
  {
    path: '/pathogens/:id',
    name: 'PathogenDetails',
    component: () => import( '../views/PathogenDetails.vue')
  },
  {
    path: '/create-pathogen',
    name: 'CreatePathogen',
    component: () => import( '../views/CreatePathogen.vue')
  },
  {
    path: '/infections',
    name: 'Infections',
    component: () => import( '../views/Infections.vue')
  },
  {
    path: '/create-infection',
    name: 'CreateInfection',
    component: () => import( '../views/CreateInfection.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
