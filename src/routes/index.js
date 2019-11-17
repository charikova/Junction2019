import Profile from '../pages/profile'
import Products from '../pages/products'
import Settings from '../pages/settings'
import ListE from '../pages/listE'

export default [
  {
    path: '/',
    component: Profile,
  },
  {
    path: '/purchases/:subject',
    component: Products,
  },
  {
    path: '/profile',
    component: Settings,
  },
  {
    path: '/listE',
    component: ListE,
  },

];
