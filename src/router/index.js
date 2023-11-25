import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetails from '@/views/event/Details.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventRegister from '@/views/event/Register.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'


const About = ()=>import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props : route=>({page:parseInt(route.query.page) || 1})
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children : [ 
        {
          path: '',
          name: 'event-details',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
          meta : {requireAuth: true}
        }

      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect :  to=>{
        return { path:'/events/'+to.params.afterEvent}
      },
    },
    {
      path: '/about-us',
      name: 'about',
      component: About
    },
    {
      path: '/about',
      redirect: {name:'about'}
    },
    {
      path : '/404/:resource',
      name : '404Resource',
      component : NotFound,
      props: true
    },
    {
      path : '/network-error',
      name : 'network-error',
      component : NetworkError
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found', 
      component : NotFound
    }
  ],
})

export default router
