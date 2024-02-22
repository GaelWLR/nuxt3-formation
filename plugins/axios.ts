import axios from "axios";
import type { AxiosInstance } from "axios";

// Add type to NuxtApp to avoid unknown error
declare module "#app" {
  interface NuxtApp {
    $axios: AxiosInstance;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config;

  const axiosInstance = axios.create({
    baseURL: config.public.httpHost as string,
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
