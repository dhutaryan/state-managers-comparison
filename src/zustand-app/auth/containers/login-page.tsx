import { Login } from '@shared/ui';

const LoginPage = () => {
  return (
    <Login
      isPending={false}
      onSubmit={() => {
        console.log('submit');
      }}
    />
  );
};

export default LoginPage;
