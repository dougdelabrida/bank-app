import React from 'react';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';

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
