export const theme = {
  color: {
    greyBright: '#c1c1c1',
    greyDark: '#535353',
    yellowBright: '#f7e018',
    yellowUnvisitedLink: '#d29909',
    yellowDark: '#b8860b',
    orangeBright: '#f26005',
    orangeVisitedLink: '#f26005a3',
    blackBoxShadow: 'rgba(0, 0, 0, 0.8)',
    black: '#000000',
  },

  spacing: {
    borderSmall: '2px',
    extraSmall: '5px',
    small: '10px',
    medium: '20px',
    large: '30px',
    extraLarge: '50px',
    superSize: '75px',
  },

  mediaQueries: {
    phone: '@media (max-width: 600px)',
    tablet: '@media (max-width: 1200px)',
    galaxyFold: '@media (max-width: 330px)',
  },

  fontSize: {
    small: '1.5rem',
    smallPlus: '1.8rem',
    medium: '2rem',
    large: '3rem',
  },

  fontWeight: {
    light: '400',
    medium: '500',
    bold: '700',
  },
} as const
