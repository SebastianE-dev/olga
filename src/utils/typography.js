import Typography from "typography";
import { fontSize } from ".";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  blockMarginBottom: 0,
  padding: 0,
  googleFonts: [
    {
      name: "Neuton",
      styles: ["300", "400", "700", "800"],
    },
    {
      name: "Open Sans",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Neuton"],
  bodyFontFamily: ["Open Sans"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    "h1,h2": {
      fontWeight: 400,
    },
    h2: {
      fontSize: fontSize.h1,
      textAlign: "center",
    },
    h3: {
      fontSize: fontSize.h4,
      fontWeight: "bold",
    },
    h1: {
      fontFamily: "Open Sans",
    },
  }),
});

export default typography;
