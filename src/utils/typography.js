import Typography from "typography";
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 0,
  googleFonts: [
    {
      name: "Dosis",
      styles: ["400", "500", "600"],
    },
  ],
  headerFontFamily: ["Dosis"],
  bodyFontFamily: ["Dosis"],
});
export default typography;
