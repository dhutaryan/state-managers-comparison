import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from '@shared/lib';

type State = {
  isAuth: boolean;
  user: User | null;
};

type Actions = {
  updateStore: ({
    isAuth,
    user,
  }: {
    isAuth: boolean;
    user: User | null;
  }) => void;
  logout: () => void;
};

const initialState: State = {
  isAuth: false,
  user: null,
};

export const appState = create(
  persist<State & Actions>(
    (set) => ({
      ...initialState,
      updateStore: ({ isAuth, user }) => {
        set({ isAuth, user });
      },
      logout: () => set(initialState),
    }),
    {
      name: 'zustand',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
