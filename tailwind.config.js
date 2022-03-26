module.exports = {
  purge: ["./src/**/*.{js,jsx.ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        lightest: "#D1D5DB",
        lighter: "#B7BAC0",
        light: "##3E5A93",
        DEFAULT: "#3E5A93",
        dark: "#2F446F",
        darker: "#202E4B",
        darkest: "#111827",
      },
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in",
        fadeOut: "fadeOut 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {
      divideStyle: ["hover", "focus"],
    },
  },
  plugins: [],
};
