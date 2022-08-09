/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#6B7280",
          accent: "#6B7280",
          neutral: "#E02424",
          orange: "",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}