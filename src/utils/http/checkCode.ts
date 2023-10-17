import { useLoginStore } from "@/stores/modules/login";

import router from "@/router";

export function checkCode(code: number, msg: string): void {
  const loginStore = useLoginStore();
  let errMessage = "";
  switch (code) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 401:
      loginStore.loginOut();
      errMessage = "用户没有权限";
      router.push({
        path: "/login",
        query: {
          redirect: router.currentRoute.value.name as string,
          ...router.currentRoute.value.query
        }
      });
      break;
    case 404:
      errMessage = "网络请求错误,未找到该资源!";
      break;
    case 405:
      loginStore.loginOut();
      errMessage = "登录失效，请重新登录";
      router.push({
        path: "/login",
        query: {
          redirect: router.currentRoute.value.name as string,
          ...router.currentRoute.value.query
        }
      });

      break;
    case 500:
      errMessage = "服务器异常";
      break;
    default:
  }

  if (msg || errMessage) {
    // showToast(msg || errMessage);
  }
}
