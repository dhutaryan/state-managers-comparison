import { Col, Layout, Row } from 'antd';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <Layout className="h-100">
      <Row className="h-100" align="middle">
        <Col flex="auto">
          <Outlet />
        </Col>
      </Row>
    </Layout>
  );
};
