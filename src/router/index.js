import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/pages/auth/login/Login.vue'
import FirstStep from '../views/pages/auth/singup/FirstStep.vue'
import SecondStep from '../views/pages/auth/singup/SecondStep.vue'
import ThirdStep from '../views/pages/auth/singup/ThirdStep.vue'

// Dashboard Pages Imports
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
