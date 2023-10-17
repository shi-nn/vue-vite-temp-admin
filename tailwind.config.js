module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,css,scss}"],
  important: "#html",
  mode: "jit",
  variants: {
    extend: {
      opacity: ["active", "hover", "disabled"],
      cursor: ["active", "hover", "disabled"]
    }
  },

  theme: {
    // 直接覆盖默认的颜色
    colors: {
      // 透明
      transparent: "transparent",
      // 白
      white: "#FFFFFF",
      // 黑
      black: "#000000",
      // 主题色
      primary: {
        DEFAULT: "#FF7017",
        light: "#FFF4EC"
      },
      // 成功
      success: {
        DEFAULT: "#07C575",
        light: "#F4FFEA"
      },
      // 危险
      danger: {
        DEFAULT: "#F65B5B",
        normal: "#F72B44",
        light: "#FFF0F0"
      },
      // 警告
      warning: {
        DEFAULT: "#FFB23E",
        light: "#FFF5E9"
      },
      // 提示
      hint: {
        DEFAULT: "#2283F5",
        light: "#ECF9FF"
      },
      // body 背景色
      body: {
        DEFAULT: "#F1F2F5",
        light: "#F7F8F9"
      },
      // 边框/分割线
      border: {
        DEFAULT: "#EBEBEB",
        normal: "#edf0f5"
      },
      // 文本
      text: {
        DEFAULT: "#11192B",
        4: "#454C5C",
        3: "#888C94",
        2: "#C3C5CA",
        1: "#EFF2F6",
        0: "#656A73",
        5: "#969AA3"
      }
    },
    fontSize: {
      xs: ["12px", { lineHeight: "20px" }],
      sm: ["14px", { lineHeight: "22px" }],
      base: ["16px", { lineHeight: "24px" }],
      lg: ["18px", { lineHeight: "26px" }],
      xl: ["20px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      "3xl": ["30px", { lineHeight: "38px" }],
      "4xl": ["36px", { lineHeight: "42px" }],
      "5xl": ["48px", { lineHeight: "1" }],
      "6xl": ["60px", { lineHeight: "1" }],
      "7xl": ["72px", { lineHeight: "1" }],
      "8xl": ["96px", { lineHeight: "1" }],
      "9xl": ["128px", { lineHeight: "1" }]
    },

    extend: {
      borderColor: {
        DEFAULT: "#EBEBEB"
      }
    }
  }
};
