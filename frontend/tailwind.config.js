/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "blue-dark": "#003d7e",
                "blue-light": "#007bff",
            },
        },
    },
    plugins: [],
};
