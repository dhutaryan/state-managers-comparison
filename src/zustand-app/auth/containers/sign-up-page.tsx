import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { SignUp, SignUpForm } from '@shared/ui';
import { useSignUpState } from './auth.state';
import { RoutePath } from '@shared/lib';

const SignUpPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isPending = useSignUpState((state) => state.isPending);
  const emailExistError = useSignUpState((state) => state.emailExistError);
  const signUp = useSignUpState((state) => state.signUp);

  return (
    <SignUp
      isPending={isPending}
      emailExistError={emailExistError}
      onSubmit={async (form: SignUpForm) => {
        const { confirmPassword, ...data } = form;
        await signUp(data);
        notification.open({
          message: t('NOTIFICATION.SIGN_UP_SUCCESS'),
          type: 'success',
        });
        navigate(RoutePath.LOGIN);
      }}
    />
  );
};

export default SignUpPage;
