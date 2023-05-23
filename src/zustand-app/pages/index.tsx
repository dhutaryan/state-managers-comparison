import { Spin } from 'antd';
import { FC, ReactNode, Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { RoutePath } from '../../shared/lib';

const ROUTES: RouteProps[] = [
  {
    path: RoutePath.LOGIN,
    element: <span>LOGIN</span>,
  },
  {
    path: RoutePath.SIGN_UP,
    element: <span>SIGN UP</span>,
  },
];

export const Routing = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<SuspenseElement element={route.element} />}
        />
      ))}
    </Routes>
  );
};

const SuspenseElement: FC<{ element: ReactNode }> = ({ element }) => {
  return (
    <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>
      {element}
    </Suspense>
  );
};
