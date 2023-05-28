import { notification } from 'antd';
import { create } from 'zustand';
import { redirect } from 'react-router-dom';

import { LoginForm, SignUpForm } from '@shared/ui';
import { appState } from '@zustand/shared/store';
import { RoutePath, createUser, getUser, getUsers } from '@shared/lib';
import { AxiosError, AxiosResponse } from 'axios';

type LoginState = {
  isPending: boolean;
  hasError: boolean;
  signIn: (form: LoginForm) => Promise<void>;
};

export const useLoginState = create<LoginState>((set) => {
  return {
    isPending: false,
    hasError: false,
    signIn: async (form: LoginForm) => {
      set({ isPending: true, hasError: false });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const [user] = await getUsers({ email: form.email }).then(
        (response) => response.data,
      );

      return getUser(user?.id)
        .then((user) =>
          appState.getState().updateStore({
            isAuth: true,
            user: user.data,
          }),
        )
        .catch(() => set({ hasError: true }))
        .finally(() => set({ isPending: false }));
    },
  };
});

type SignUpState = {
  isPending: boolean;
  emailExistError: boolean;
  signUp: (
    data: Omit<SignUpForm, 'confirmPassword'>,
  ) => Promise<AxiosResponse<void> | void>;
};

export const useSignUpState = create<SignUpState>((set) => {
  return {
    isPending: false,
    emailExistError: false,
    success: false,
    signUp: async (data) => {
      set({ isPending: true, emailExistError: false });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const [user] = await getUsers({ email: data.email }).then(
        (response) => response.data,
      );

      if (user) {
        set({ emailExistError: true, isPending: false });
        throw new AxiosError('Email already exists');
      }

      return await createUser(data)
        .catch(() => set({ emailExistError: true }))
        .finally(() => set({ isPending: false }));
    },
  };
});
