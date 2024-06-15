/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'space': ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        'extra-large': '8rem',
      },
      colors: {
        secondary: {
          '800': '#131C25',
          '900': '#10171E',
        },
      },
    }
  },

  "plugins": [
    [
      "prismjs",
      {
        "plugins": ["copy-to-clipboard"],
        "css": true
      }
    ]
  ]
}
