import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/listado/:user',
    name: 'Listado',
    component: () => import('../views/Listado.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crear/:user',
    name: 'Creacion',
    component: () => import('../views/Creacion.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/vincular',
    name: 'Vincular',
    component: () => import('../views/Vincular.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  //Some: Cuando al menos algun elemento pasa el test devuelve true
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  //Si requiere autentificación y no está logueado va a login
  if (requiresAuth && !(await store.dispatch("user/getCurrentUser"))) { next({ name: "Login" }); }
  //Si no requiere autentificación y está logueado va a la página principal
  else if (!requiresAuth && (await store.dispatch("user/getCurrentUser"))) { next({ name: "Home" }); }
  else { next(); }
});

export default router;