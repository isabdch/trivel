import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colors: {
    trivelOrange: [
      "#FDF2EF",
      "#FCEEEA",
      "#F9D7CE",
      "#F7CABE",
      "#F3AF9E",
      "#EF947D",
      "#EB795D",
      "#E75F3C",
      "#E5512C",
      "#E2451C",
    ],
    hotGray: [
      "#F2F2F2",
      "#EEEEEE",
      "#E9E9E9",
      "#DFDFDF",
      "#CCCCCC",
      "#A5A5A5",
      "#9C9C9C",
      "#929292",
      "#7F7F7F",
      "#595959",
    ],
  },
  white: "#FFFFFF",
  black: "#000000",
  primaryColor: "trivelOrange",
  primaryShade: 9,
  shadows: {},
  breakpoints: {
    sm: "768",
    md: "1000",
    xl: "1440",
  },
  other: {
    flexUtil: (
      flex_flow: string,
      justify_content: string,
      align_items: string,
      gap: string,
      flex: string | number
    ) => {
      return {
        display: "flex",
        flexFlow: flex_flow,
        justifyContent: justify_content,
        alignItems: align_items,
        gap: gap,
        flex: flex,
      };
    },
    sizeUtil: (width: string, height: string) => {
      return {
        width: width,
        height: height,
      };
    },
    sizes: {
      ssm: "5px",
      sm: "10px",
      xsm: "15px",
      lsm: "20px",
      smd: "30px",
      md: "50px",
    },
    fontSizes: {
      sm: "14px",
      md: "16px",
      xs: "18px",
      xm: "20px",
      xx: "60px",
    },
  },
  globalStyles: (theme) => ({
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "Montserrat, sans-serif",
    },

    ".container": {
      width: "100%",
      maxWidth: "1080px",
      margin: "0 auto",
    },
  }),
};
