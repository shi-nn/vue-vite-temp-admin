import { createAlova } from "alova";
import VueHook from "alova/vue";
import { axiosRequestAdapter } from "@alova/adapter-axios";

import { useLoginStore } from "@/stores/modules/login";

import { checkCode } from "./checkCode";

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL as string;
export interface ResponseBody<T = any> {
  code: number;
  data?: T;
  msg: string;
}

export function createAlovaInstance(config: Record<string, any> = {}) {
  const alovaInstance = createAlova({
    // baseURL: `/`,
    requestAdapter: axiosRequestAdapter(),
    statesHook: VueHook,
    responded: {
      onSuccess: (response: any) => {
        const { data } = response as any;
        const result = data as ResponseBody<any>;
        if (result.code === 0) {
          return config.transformData?.(result) ?? result.data;
        }

        checkCode(data.code, data.msg);
        return Promise.reject(data);
      },
      onError: (error: any) => {
        const data = error.response.data;

        checkCode(data.code, data.msg);
        return Promise.reject(error.response);
      }
    },
    beforeRequest(method: any) {
      const loginStore = useLoginStore();
      const headers = method.config.headers;

      if (loginStore.token) {
        headers.token = loginStore.token;
      }
    },
    ...config
  });

  type alovaConfig = Parameters<typeof alovaInstance.Get>[1];

  function requestGet<T = any>(url: string, params?: any, config?: alovaConfig) {
    return alovaInstance.Get<T>(url, {
      params,
      localCache: 250,
      ...(config as any)
    });
  }

  function post<T = any>(url: string, data?: any, config?: alovaConfig) {
    return alovaInstance.Post<T>(url, data, config as any);
  }

  function requestDelete<T = any>(url: string, data?: any, config?: alovaConfig) {
    return alovaInstance.Delete<T>(url, data, config as any);
  }

  function requestPut<T = any>(url: string, data?: any, config?: alovaConfig) {
    return alovaInstance.Put<T>(url, data, config as any);
  }

  return {
    get: requestGet,
    post,
    delete: requestDelete,
    put: requestPut,
    getInstace: () => {
      return alovaInstance;
    }
  };
}

export const service = createAlovaInstance();
