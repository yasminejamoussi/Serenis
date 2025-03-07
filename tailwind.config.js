/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./public/**/*.html",
    "./src/**/*.js",
    "./src/**/*.css"
  ],
  theme: {
    extend: {

      colors: {
        bleuhh: '#3164C4',     // Bleu
        orangehh: '#B14343',   // Orange
        verthh: '#4E7040',     // Vert
        fondhh: '#F5E6C4',     // Fond
        navfoohh : '#FFF3D9'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Police Roboto pour le texte
      },
      fontSize: {
        h1: '40px',    // Titre principal
        h2: '28px',    // Sous-titre important
        h3: '20px',    // Sous-sous-titre
        p: '16px',     // Paragraphe standard
        small: '12px', // Petit texte (légende, labels, bouton, info secondaire)
      },
    },
  },
  plugins: [],
}

