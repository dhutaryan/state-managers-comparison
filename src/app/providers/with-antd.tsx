import { ConfigProvider, theme } from 'antd';
import locale from 'antd/locale/en_US';
import { ReactNode } from 'react';

export const withAntd = (component: () => ReactNode) => () =>
  (
    <ConfigProvider theme={theme.defaultConfig} locale={locale}>
      {component()}
    </ConfigProvider>
  );
