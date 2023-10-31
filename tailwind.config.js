/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                Cyan: '#d4e9e2',
                DarkCyan: '#91ceb9',
                Green: '#006241',
                DarkGreen: '#01412c',
            },
        },
    },
    plugins: [],
}
