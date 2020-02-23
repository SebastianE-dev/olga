import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  blockMarginBottom: 0,
  padding: 0,
  googleFonts: [
    {
      name: "Dosis",
      styles: ["400", "500", "600"],
    },
  ],
  headerFontFamily: ["Dosis"],
  bodyFontFamily: ["Dosis"],
  // overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  //   "h1,h2": {
  //     color: colors.deepDarkGrey,
  //   },
  // }),
})

export default typography
