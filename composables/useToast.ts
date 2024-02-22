const toast = ref("");

type UseToast = {
  closeToast: () => void;
  openToast: (message: string) => void;
  toast: Readonly<Ref<string>>;
};

export const useToast = (): UseToast => {
  const closeToast = () => {
    toast.value = "";
  };

  const openToast = (message: string) => {
    toast.value = message;
  };

  return {
    closeToast,
    openToast,
    toast: readonly(toast),
  };
};
