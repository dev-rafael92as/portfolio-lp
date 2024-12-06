/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            'main': '#0C1218',
            'white': '#FFFFFF',
            'primaryBlue': '#3772FF'
        },
        extend: {
            fontFamily: {
                epilogue: ['Epilogue', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif']
            }
        },
    },
    plugins: [],
};
