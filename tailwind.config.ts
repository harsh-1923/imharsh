import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lowContrast: "var(--colors-lowContrast)",
        highContrast: "var(--colors-highContrast)",
        focus: "var(--colors-focus)",
        grid: "var(--colors-grid)",

        /* Gray */
        gray1: "var(--colors-gray1)",
        gray2: "var(--colors-gray2)",
        gray3: "var(--colors-gray3)",
        gray4: "var(--colors-gray4)",
        gray5: "var(--colors-gray5)",
        gray6: "var(--colors-gray6)",
        gray7: "var(--colors-gray7)",
        gray8: "var(--colors-gray8)",
        gray9: "var(--colors-gray9)",
        gray10: "var(--colors-gray10)",
        gray11: "var(--colors-gray11)",
        gray12: "var(--colors-gray12)",

        /* Gray Alpha */
        grayA1: "var(--colors-grayA1)",
        grayA2: "var(--colors-grayA2)",
        grayA3: "var(--colors-grayA3)",
        grayA4: "var(--colors-grayA4)",
        grayA5: "var(--colors-grayA5)",
        grayA6: "var(--colors-grayA6)",
        grayA7: "var(--colors-grayA7)",
        grayA8: "var(--colors-grayA8)",
        grayA9: "var(--colors-grayA9)",
        grayA10: "var(--colors-grayA10)",
        grayA11: "var(--colors-grayA11)",
        grayA12: "var(--colors-grayA12)",

        /* Blue */
        blue1: "var(--colors-blue1)",
        blue2: "var(--colors-blue2)",
        blue3: "var(--colors-blue3)",
        blue4: "var(--colors-blue4)",
        blue5: "var(--colors-blue5)",
        blue6: "var(--colors-blue6)",
        blue7: "var(--colors-blue7)",
        blue8: "var(--colors-blue8)",
        blue9: "var(--colors-blue9)",
        blue10: "var(--colors-blue10)",
        blue11: "var(--colors-blue11)",
        blue12: "var(--colors-blue12)",

        /* Blue Alpha */
        blueA1: "var(--colors-blueA1)",
        blueA2: "var(--colors-blueA2)",
        blueA3: "var(--colors-blueA3)",
        blueA4: "var(--colors-blueA4)",
        blueA5: "var(--colors-blueA5)",
        blueA6: "var(--colors-blueA6)",
        blueA7: "var(--colors-blueA7)",
        blueA8: "var(--colors-blueA8)",
        blueA9: "var(--colors-blueA9)",
        blueA10: "var(--colors-blueA10)",
        blueA11: "var(--colors-blueA11)",
        blueA12: "var(--colors-blueA12)",

        /* Green */
        green1: "var(--colors-green1)",
        green2: "var(--colors-green2)",
        green3: "var(--colors-green3)",
        green4: "var(--colors-green4)",
        green5: "var(--colors-green5)",
        green6: "var(--colors-green6)",
        green7: "var(--colors-green7)",
        green8: "var(--colors-green8)",
        green9: "var(--colors-green9)",
        green10: "var(--colors-green10)",
        green11: "var(--colors-green11)",
        green12: "var(--colors-green12)",

        /* Amber */
        amber1: "var(--colors-amber1)",
        amber2: "var(--colors-amber2)",
        amber3: "var(--colors-amber3)",
        amber4: "var(--colors-amber4)",
        amber5: "var(--colors-amber5)",
        amber6: "var(--colors-amber6)",
        amber7: "var(--colors-amber7)",
        amber8: "var(--colors-amber8)",
        amber9: "var(--colors-amber9)",
        amber10: "var(--colors-amber10)",
        amber11: "var(--colors-amber11)",
        amber12: "var(--colors-amber12)",

        /* Red */
        red1: "var(--colors-red1)",
        red2: "var(--colors-red2)",
        red3: "var(--colors-red3)",
        red4: "var(--colors-red4)",
        red5: "var(--colors-red5)",
        red6: "var(--colors-red6)",
        red7: "var(--colors-red7)",
        red8: "var(--colors-red8)",
        red9: "var(--colors-red9)",
        red10: "var(--colors-red10)",
        red11: "var(--colors-red11)",
        red12: "var(--colors-red12)",

        /* Teal */
        teal1: "var(--colors-teal1)",
        teal2: "var(--colors-teal2)",
        teal3: "var(--colors-teal3)",
        teal4: "var(--colors-teal4)",
        teal5: "var(--colors-teal5)",
        teal6: "var(--colors-teal6)",
        teal7: "var(--colors-teal7)",
        teal8: "var(--colors-teal8)",
        teal9: "var(--colors-teal9)",
        teal10: "var(--colors-teal10)",
        teal11: "var(--colors-teal11)",
        teal12: "var(--colors-teal12)",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
