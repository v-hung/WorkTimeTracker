import { useAuthStore } from "@/stores/auth.store";
import { createSuspender } from "../utils/suspender";
import i18n from "../utils/i18n";

export const authBootstrap = createSuspender(
  (async () => {
    if (!i18n.isInitialized) {
      await i18n.init();
    }
    return await useAuthStore.getState().load();
  })()
);

export const authBootstrapLogout = async (callback?: () => void) => {
  await useAuthStore.getState().logout(() => {
    authBootstrap.setResult(undefined);

    if (callback) {
      callback();
    }
  });
};
