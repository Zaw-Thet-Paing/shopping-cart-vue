import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Product from '../Pages/Product.vue'
import Cart from '../Pages/Cart.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/product', name: 'product', component: Product},
        {path: '/cart', name: 'cart', component: Cart}
    ]
})

export default router