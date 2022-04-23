import { Page404 } from '../404/404';
import { HomePage } from '../home';

export const routers = [
  {
    path: '/',
    component: <HomePage />,
    index: true,
  },
  {
    path: '/stake',
    component: <HomePage />,
  },
  {
    path: '/airdrop',
    component: <HomePage />,
  },
  {
    path: '/validator',
    component: <HomePage />,
  },
  {
    path: '/about',
    component: <HomePage />,
  },
  {
    path: '*',
    component: <Page404 />,
  },
];
