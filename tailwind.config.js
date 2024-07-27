/** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html", "./src/**/*.{html,js,ts,jsx,css}"],
  theme: {
    extend: {
      backgorundImage: {
        "bg-img":"url(https://wallpapercave.com/wp/wp7307741.jpg)"
      },
      colors: {
        "blue-dull":"#B4E5EA",
        "blue-light": "#08AAE3",
        "blue-mid":"#2693bb",
        "blue-dark":"#067ba5",
        "red": "#d94141",
        "gold": "#c7a200",
        "text-light": "#dee2e6",
        "text-dark": "#adb5bd",
        "bg-dark-100": "#37475A",
        "bg-dark-500": "#232F3E",
        "bg-dark-900": "#131A22",
        "red-light": "#fa5252",
        "red-dark": "#e03131",
      },
    },
  },
  plugins: [],
}

