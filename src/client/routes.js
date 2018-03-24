import React from 'react';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Transactions from './pages/Transactions';

const Login = () => <span>Login</span>;
const Dashboard = () => <span>Dashboard</span>;
const Profile = () => <span>Profile</span>;
const Transactions = () => <span>Transactions</span>;

export default {
  public: [
    {
      path: '/login',
      component: Login
    }
  ],
  private: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/transactions',
      component: Transactions
    }
  ]
}
