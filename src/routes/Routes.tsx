import React from 'react';
import async from 'components/Async1';
import { RoutesType } from './index';

const Dashboard = async(() => import('../pages/dashboard'));
const Login = async(() => import('../pages/signIn'));
const MallCategory = async(() => import('../pages/mall/category/index'));

// 用户管理
const User = async(() => import('../pages/users/index'));
const My = async(() => import('../pages/users/my'));

const HomeRoutes = {};

const LoginRoutes: RoutesType = {
  name: 'Auth',
  path: '/auth',
  header: 'Home',
  children: [
    {
      path: '/auth/sign-in',
      name: '登录',
      Component: Login,
    },
  ],
};

const pagesRoutes: RoutesType = {
  name: 'Dashboard',
  path: '/dashboard',
  Component: Dashboard,
};

// 账号管理
const userRoutes: RoutesType = {
  name: '账号管理',
  path: '/user',
  children: [
    {
      path: '/user/list',
      name: '账号列表',
      Component: User,
    },
    {
      path: '/user/my',
      name: '个人中心',
      Component: My,
    },
  ],
};

// 商品
const productRoutes: RoutesType = {
  name: '商品管理',
  path: '/mall',
  children: [
    {
      path: '/mall/product',
      name: '商品分类',
      Component: MallCategory,
    },
  ],
};

export const sidebarRoutes: Array<RoutesType> = [
  pagesRoutes,
  productRoutes,
  userRoutes,
];

export const authRoutes = [LoginRoutes];
