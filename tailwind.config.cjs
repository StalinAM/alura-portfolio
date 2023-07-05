/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        js: "#fbae17",
      },
      gridTemplateColumns: {
        "box-xl": "repeat(auto-fill, minmax(300px, 1fr))",
        "box-x": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
