import Profile from '../pages/profile'
import Products from '../pages/products'
import Settings from '../pages/settings'

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
  }
];
