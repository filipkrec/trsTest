import Vue from 'vue'
import Router from 'vue-router'
import Klijenti from '@/components/Klijenti'
import Login from '@/components/Login'
import AdminKlijenata from '@/components/AdminKlijenata'
import AdminProizvoda from '@/components/AdminProizvoda'
import Register from '@/components/Register'
import ViewKlijent from '@/components/ViewKlijent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Klijenti',
      component: Klijenti
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/adminKlijenata',
      name: 'adminKlijenata',
      component: AdminKlijenata
    },
    {
      path: '/adminProizvoda',
      name: 'adminProizvoda',
      component: AdminProizvoda
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/klijenti/:klijentId',
      name: 'klijenti' ,
      component: ViewKlijent
    }
  ]
})
