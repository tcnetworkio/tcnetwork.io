import { Page404 } from '../404/404';
import { AirdropPage } from '../airdrop';
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
    component: <AirdropPage />,
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
