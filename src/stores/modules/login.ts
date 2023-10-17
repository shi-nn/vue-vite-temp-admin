import { defineStore } from "pinia";

export interface LOGIN_STATE {
  token: string;
  userId: string;
}

export const useLoginStore = defineStore("loginStore", {
  state: (): LOGIN_STATE => {
    return {
      token: "",
      userId: ""
    };
  },
  getters: {},
  actions: {
    setLoginInfo({ token, userId }: any) {
      return new Promise(resolve => {
        this.token = token;
        this.userId = userId;
        resolve(true);
      });
    },
    loginOut() {
      this.token = "";
      useLoginStore().$reset();
    }
  },
  persist: {
    key: "caseAdminUserInfo",
    storage: localStorage,
    paths: ["token", "userId"]
  }
});
