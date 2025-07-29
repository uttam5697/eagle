/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["1rem"], // 16px
      "2sm": ["18px"], // 18px
      base: ["1.25rem"], // 20px
      xl: ["1.5rem"], // 24px
      "2xl": ["1.875rem"], // 30px
      "3xl": ["3.375rem"], // 32px
      "4xl": ["2.125rem"], // 34px
      "4.5xl": ["3.375rem"], // 54px
      "5xl": ["5.25rem"], // 84px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '1.5rem',
      }
    },
    extend: {
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        playfairDisplay: ['Playfair Display', 'sans-serif'],
      },
      colors: {
        primary: "#B08D40",
        "light-white": "#FBFAF7",
        black: "#000000",
        white: "#FFFFFF",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "3xl": "1.875rem",
        "2xl": "1.25rem",
        xl: "0.938rem",
      },
      "primary-gradient": "linear-gradient(180deg, #D9B45D 0%, #9E7D34 100%)",
      
      },
      maxWidth: {
        "screen-5xl": "1600px",
        "screen-4xl": "1350px",
        "screen-3xl": "1120px", 
        "screen-2xl": "1000px",
        "screen-xl": "900px",
        "screen-lg": "800px",
        "screen-md": "700px",
        "screen-sm": "580px",
      },
      screens: {
        "3xl": "1700px",
        'md': '769px',
        '2md': '896px',
        '2lg': '1152px',
        '3lg':'1280px',
      },
    },
  plugins: [],
};
