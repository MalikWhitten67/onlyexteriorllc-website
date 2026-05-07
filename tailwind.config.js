module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./node_modules/vaderjs-daisyui/Components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  safelist: [
  "btn",
  "card",
  "input",
  "modal",
  "alert"
],
};