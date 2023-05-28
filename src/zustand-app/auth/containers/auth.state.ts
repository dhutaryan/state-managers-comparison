import { create } from 'zustand';

import { LoginForm } from '@shared/ui';
import { appState } from '@zustand/shared/store/app.state';
import { getUser, getUsers } from '@shared/lib';

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
