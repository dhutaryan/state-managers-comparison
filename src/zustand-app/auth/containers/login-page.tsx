import { Login, LoginForm } from '@shared/ui';
import { useLoginState } from './auth.state';

const LoginPage = () => {
  const isPending = useLoginState((state) => state.isPending);
  const hasError = useLoginState((state) => state.hasError);
  const signIn = useLoginState((state) => state.signIn);

  return (
    <Login
      isPending={isPending}
      hasError={hasError}
      onSubmit={(form: LoginForm) => {
        signIn(form);
      }}
    />
  );
};

export default LoginPage;
