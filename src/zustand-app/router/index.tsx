import { Spin } from 'antd';
import { FC, ReactNode, Suspense, lazy } from 'react';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';

import { RoutePath } from '@shared/lib';
import { AppLayout, AuthLayout, Header } from '@shared/ui';
import { appState } from '@zustand/shared/store/app.state';

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

const PRIVATE_ROUTES: RouteProps[] = [
  {
    path: RoutePath.DASHBOARD,
    element: <span>DASHBOARD</span>,
  },
];

export const Routing = () => {
  const isAuth = appState((state) => state.isAuth);
  const logout = appState((state) => state.logout);

  return (
    <Routes>
      {isAuth ? (
        <Route
          element={
            <AppLayout>
              <Header onLogout={() => logout()} />
            </AppLayout>
          }
        >
          {PRIVATE_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<SuspenseElement element={route.element} />}
            />
          ))}
          <Route
            path="*"
            element={<Navigate to={RoutePath.DASHBOARD} replace />}
          />
        </Route>
      ) : (
        <Route element={<AuthLayout />}>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<SuspenseElement element={route.element} />}
            />
          ))}
          <Route path="*" element={<Navigate to={RoutePath.LOGIN} replace />} />
        </Route>
      )}
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
