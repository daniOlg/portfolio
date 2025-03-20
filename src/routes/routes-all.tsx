import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';
import { CounterPage } from '@/pages/CounterPage/CounterPage';

const Home = lazy(() => import('../pages/home'));

export const routesAll: RouteObject[] = [
  {
    index: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: 'counter',
    element: <CounterPage />,
  },
];
