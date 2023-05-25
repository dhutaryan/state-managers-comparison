import { Spin } from 'antd';
import { FC, ReactNode, Suspense, lazy } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { RoutePath } from '@shared/lib';
import { AuthLayout } from '@shared/ui';

const LoginPage = lazy(() => import('../auth/containers/login-page'));

const ROUTES: RouteProps[] = [
  {
    path: RoutePath.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RoutePath.SIGN_UP,
    element: <span>SIGN UP</span>,
  },
];

export const Routing = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<SuspenseElement element={route.element} />}
          />
        ))}
      </Route>
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
