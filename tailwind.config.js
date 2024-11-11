import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'rubik':['Rubik, sans-serif']
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px'
      },
      colors: {
        app: {
          primary: {
            blue: 'hsl(246, 80%, 60%)',
            softOrange: 'hsl(15, 100%, 70%)',
            softBlue: 'hsl(195, 74%, 62%)',
            lightRed: 'hsl(348, 100%, 68%)',
            limeGreen: 'hsl(145, 58%, 55%)',
            violet: 'hsl(264, 64%, 52%)',
            yellow: 'hsl(43, 84%, 65%)',

          },
          neutral: {
            veryDarkBlue: 'hsl(226, 43%, 10%)',
            darkBlue: 'hsl(235, 46%, 20%)',
            desaturatedBlue: 'hsl(235, 45%, 61%)',
            paleBlue: 'hsl(236, 100%, 87%)',
          }
        }
      },
      backgroundImage: {
          'app-icon-exercise':"url('/src/assets/images/icon-exercise.svg')",
          'app-icon-play':"url('/src/assets/images/icon-play.svg')",
          'app-icon-self-care':"url('/src/assets/images/icon-self-care.svg')",
          'app-icon-social':"url('/src/assets/images/icon-social.svg')",
          'app-icon-study':"url('/src/assets/images/icon-study.svg')",
          'app-icon-work': "url('/src/assets/images/icon-work.svg')",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    prefix: 'daisy-',
    themes:false
  },
  safelist:[
    'bg-app-primary-softOrange',
    'bg-app-primary-softBlue',
    'bg-app-primary-lightRed',
    'bg-app-primary-limeGreen',
    'bg-app-primary-violet',
    'bg-app-primary-yellow',
    'bg-app-icon-work',
    'bg-app-icon-study',
    'bg-app-icon-social',
    'bg-app-icon-self-care',
    'bg-app-icon-play',
    'bg-app-icon-exercise',
    
  ]
}

