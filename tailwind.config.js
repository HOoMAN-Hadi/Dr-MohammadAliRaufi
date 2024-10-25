/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // brightness: {
    //   0: "0",
    //   25: "0.25",
    //   50: "0.5",
    //   75: "0.75",
    //   100: "1",
    //   125: "1.25",
    //   150: "1.5",
    //   175: "1.75",
    // },
    extend: {
      boxShadow: {
        bs: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        bs2: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.3)" },
        },
        scaleUpCard: {
          "0%": { transform: "scale(1)", boxShadow: "none" },
          "100%": {
            transform: "scale(1.1)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.1s ease-in-out forwards",
        scaleUpCard: "scaleUpCard 0.4s ease-in-out forwards",
      },
      fontFamily: {
        lalezar: ["lalezar", "sans-serif"],
        byekan: ["byekan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
