import { lazy, Suspense } from 'react';

import { SuspenseLoader } from './components/Loader/Suspense';
import Layout from './layout';

// Used to load the component
const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import('./pages/Home')));

const Dashboard = Loader(lazy(() => import('./pages/Dashboard')));

const Status404 = Loader(lazy(() => import('./pages/Helpful/Error/404')));

const routes = () => [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
];

export default routes;
