import Login from '../pages/login'
import Profile from '../pages/profile'
import Products from '../pages/products'

export default [
  {
    path: '/',
    component: Profile,
  },
  {
    path: '/purchases/:subject',
    component: Products,
  }
];
