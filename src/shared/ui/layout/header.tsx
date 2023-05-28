import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar, Col, Dropdown, Layout, Menu, MenuProps, Row } from 'antd';

import { RoutePath } from '@shared/lib';

type Props = {
  onLogout: () => void;
};

export const Header: FC<Props> = ({ onLogout }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;

  const MAIN_MENU: MenuProps['items'] = [
    {
      key: RoutePath.DASHBOARD,
      label: <Link to={RoutePath.DASHBOARD}>{t('MENU.DASHBOARD')}</Link>,
    },
  ];

  const USER_MENU: MenuProps['items'] = [
    {
      key: 'logout',
      label: t('MENU.LOGOUT'),
      onClick: onLogout,
    },
  ];

  return (
    <Layout.Header>
      <Row justify="space-between" wrap={false}>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            disabledOverflow={true}
            selectedKeys={[path]}
            items={MAIN_MENU}
          />
        </Col>
        <Col>
          <Dropdown
            placement="bottomRight"
            menu={{ items: USER_MENU }}
            trigger={['click']}
          >
            <Avatar style={{ cursor: 'pointer' }}>T</Avatar>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
};
