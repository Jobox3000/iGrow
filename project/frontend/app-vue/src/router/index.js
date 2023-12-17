import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from '../pages/IndexPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import DocsPage from '../pages/views/home/DocsPage';
import MyGrowsPage from '../pages/views/home/MyPage';
import AllGrowsPage from '../pages/views/home/AllPage';
import CatalogPage from '../pages/views/shop/CatalogPage';
import CartPage from '../pages/views/shop/CartPage';
import AccountPage from '../pages/views/AccountPage';
import DirectPage from '../pages/views/DirectPage';

const routes = [

    // Index
    {
        path: '/',
        component: IndexPage,
        meta: {
            title: 'Index',
        },
    },
    {
        path: '/index',
        component: IndexPage,
        meta: {
            title: 'Index',
        },
    },

    // Login
    {
        path: '/auth/login',
        component: LoginPage,
        meta: {
            title: 'Login',
        },
    },

    // Register
    {
        path: '/auth/register',
        component: RegisterPage,
        meta: {
            title: 'Register',
        },
    },

    // Home
    {
        path: '/home',
        component: MyGrowsPage,
        meta: {
            title: 'Home',
        },
    },
    // Docs
    {
        path: '/home/docs',
        component: DocsPage,
        meta: {
            title: 'Docs',
        },
    },
    // My-Grows
    {
        path: '/home/my_grows',
        component: MyGrowsPage,
        meta: {
            title: 'MyGrows',
        },
    },
    // All-Grows
    {
        path: '/home/all_grows',
        component: AllGrowsPage,
        meta: {
            title: 'AllGrows',
        },
    },

    // Shop
    {
        path: '/shop',
        component: CatalogPage,
        meta: {
            title: 'Shop',
        },
    },
    // Shop
    {
        path: '/shop/catalog',
        component: CatalogPage,
        meta: {
            title: 'Catalog',
        },
    },
    // Shop
    {
        path: '/shop/cart',
        component: CartPage,
        meta: {
            title: 'Cart',
        },
    },

    // Account
    {
        path: '/account',
        component: AccountPage,
        meta: {
            title: 'Account',
        },
    },

    // Direct
    {
        path: '/direct',
        component: DirectPage,
        meta: {
            title: 'Direct',
        },
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
