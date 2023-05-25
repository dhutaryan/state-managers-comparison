import { LoadingOutlined } from '@ant-design/icons';
import { Row, Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { Routing } from './router';

const loadingIcon = <LoadingOutlined spin />;

export const ZustandApp = () => {
  const { ready } = useTranslation();

  return ready ? (
    <Routing />
  ) : (
    <Row className="h-100" align="middle" justify="center">
      <Spin size="large" indicator={loadingIcon} />
    </Row>
  );
};
