import Typography from "typography";

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
  // overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  //   "h1,h2": {
  //     color: colors.deepDarkGrey,
  //   },
  // }),
});

export default typography;
