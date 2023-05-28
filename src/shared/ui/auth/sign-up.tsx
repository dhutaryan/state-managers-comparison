import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, Form, Input, Typography } from 'antd';
import styled from '@emotion/styled';

import { useFormRules } from '@shared/lib';

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpCard = styled(Card)`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

type Props = {
  isPending: boolean;
  emailExistError: boolean;
  onSubmit: (form: SignUpForm) => void;
};

export const SignUp: FC<Props> = ({ isPending, emailExistError, onSubmit }) => {
  const { t } = useTranslation();
  const { required, email, equal } = useFormRules();

  return (
    <SignUpCard title={t('HEADER.REGISTRATION')}>
      <Form layout="vertical" requiredMark="optional" onFinish={onSubmit}>
        <Form.Item
          name="name"
          label={t('FORM_LABEL.NAME')}
          rules={[required()]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label={t('FORM_LABEL.EMAIL')}
          rules={[required(), email()]}
          {...(emailExistError && {
            validateStatus: 'error',
            help: t('FORM_ERROR.EMAIL_ALREADY_EXISTS'),
          })}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label={t('FORM_LABEL.PASSWORD')}
          rules={[required()]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm-password"
          label={t('FORM_LABEL.CONFIRM_PASSWORD')}
          dependencies={['password']}
          rules={[
            required(),
            equal('password', 'FORM_ERROR.PASSWORD_DO_NOT_MATCH'),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Button htmlType="submit" type="primary" loading={isPending}>
            {t('BUTTON.SIGN_UP')}
          </Button>
        </Form.Item>
      </Form>

      <Typography.Text>
        {t('ALREADY_HAVE_AN_ACCOUNT')}
        <Link to="login">
          <Typography.Link style={{ marginLeft: '8px' }}>
            {t('BUTTON.SIGN_IN')}
          </Typography.Link>
        </Link>
      </Typography.Text>
    </SignUpCard>
  );
};
