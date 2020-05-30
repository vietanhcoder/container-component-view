import { lazy } from 'react';

const Dashboard = lazy(() => import('./modules/Dashboard/containers/Dashboard'));
const Profile = lazy(() => import('./modules/Profile/containers/Profile'));
const ChangePassword = lazy(() => import('./modules/ChangePassword/containers/ChangePassword'));
const ManagementMember = lazy(() => import('./modules/ManagementMember/containers/Member'));
const ManagementOperator = lazy(() => import('./modules/ManagementOperator/containers/Operator'));

const routes = [
  { path: '', extract: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/change-password', name: 'Change Password', component: ChangePassword },
  { path: '/management/member', name: 'Management Member', component: ManagementMember },
  { path: '/management/operator', name: 'Management Operator', component: ManagementOperator },
];

export default routes;
