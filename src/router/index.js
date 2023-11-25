import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetails from '@/views/event/Details.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventRegister from '@/views/event/Register.vue'
import AboutView from '@/views/AboutView.vue'

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
      path: '/event/:id',
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
        }

      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
