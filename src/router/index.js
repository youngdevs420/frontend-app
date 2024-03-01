import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/pages/auth/login/Login.vue'
import FirstStep from '../views/pages/auth/singup/FirstStep.vue'
import SecondStep from '../views/pages/auth/singup/SecondStep.vue'
import ThirdStep from '../views/pages/auth/singup/ThirdStep.vue'

// Dashboard Pages Imports
import AdminDashboard from '../views/dashboard/pages/AdminDashboard/AdminDashboard.vue'
import Dashboard from '../views/dashboard/pages/dashboard/Dashboard.vue'
import Insureds from '../views/dashboard/pages/insureds/Insureds.vue'
import CreateInsured from '../views/dashboard/pages/insureds/CreateInsured.vue'
import Renewals from '../views/dashboard/pages/renewals/Renewals.vue'
import Profile from '../views/dashboard/pages/profile/Profile.vue'
import ProfileSetting from '../views/dashboard/pages/profile/ProfileSetting.vue'
import ReceiptLog from '../views/dashboard/pages/receiptLog/ReceiptLog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup/firststep',
      name: 'firststep',
      component: FirstStep
    },
    {
      path: '/signup/secondstep',
      name: 'secondstep',
      component: SecondStep
    },
    {
      path: '/signup/thirdstep',
      name: 'thirdstep',
      component: ThirdStep
    },

    // dashboard routes
    {
      path: '/admindashboard',
      name: 'admindashboard',
      component: AdminDashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/insureds',
      name: 'insureds',
      component: Insureds
    },
    {
      path: '/createinsured',
      name: 'createdinsured',
      component: CreateInsured
    },
    {
      path: '/receiptlog',
      name: 'receiptlog',
      component: ReceiptLog
    },
    {
      path: '/renewals',
      name: 'renewals',
      component: Renewals
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/setting',
      name: 'profilesetting',
      component: ProfileSetting
    },

  ]
})

export default router
