import { Layout } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      {children}
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
