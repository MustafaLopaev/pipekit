import { lazy, Suspense } from 'react';

import SupenseLoader from './components/Loader/Suspense';
import Navbar from './layout/Navbar';

// Used to load the component
const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SupenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import('./pages/Home')));

const Dashboard = Loader(lazy(() => import('./pages/Dashboard')));

const Status404 = Loader(lazy(() => import('./pages/Helpful/Error/404')));

const routes = () => [
  {
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
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
