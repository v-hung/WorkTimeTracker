import {
  LoginRequest,
  Permission,
  UserDto,
  UserPosition,
  UserStatus,
} from "@/generate-api";
import { accountApi, accountApiWithRefreshToken } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {} from "react-router";
import { wrapPromise } from "@/common/utils/promise";

type AuthStoreState = {
  user: UserDto | null;
  permissions: Permission[];
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  load: () => Promise<void>;
};

export const useAuthStore = create<AuthStoreState>()(
  immer((set) => ({
    user: null,
    permissions: [],

    login: async (credentials) => {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // set({
      //   user: USER,
      // });

      const response = await accountApi.accountLogin(credentials);
      set({ user: response.user });
    },

    logout: () => set({ user: null }),

    load: async () => {
      // await new Promise((resolve, reject) => setTimeout(resolve, 300));
      // set({
      //   user: USER,
      // });

      await wrapPromise(() =>
        accountApiWithRefreshToken
          .accountGetCurrentUser()
          .then((user) => set({ user }))
      );
    },
  }))
);

const USER = {
  id: "1",
  fullName: "Nguyễn Việt Hùng",
  email: "hungnv@wbcvn.vn",
  createdAt: new Date(),
  updatedAt: new Date(),
  isFirstLogin: false,
  leaveHours: 0,
  userPosition: UserPosition.Developer,
  userStatus: UserStatus.Active,
};
