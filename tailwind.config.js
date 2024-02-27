/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./img/hero.jpg')",
        "main-parralax": "url('./img/bg-parralax.jpg')",
        "hero-shape": "url('./img/hero-shape.png')",
        "react-logo": "url(./img/react-logo.png)",
        "next-logo": "url(./img/next-logo.png)",
        "express-logo": "url(./img/express-logo.png)",
        "blog-hero-background":
          "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
      },
      colors: {
        "primary-dark": "#02050A", // used for darker background
        "primary-light": "#09101A", // used for lighter background
        secondary: "#141C27", // used for header
        accent: "#55E6A5", // used for font and outline
        "accent-secondary": "#A2A2A2", // used for font
        "accent-light": "rgb(55 65 81)", // used for font (lighter)
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
