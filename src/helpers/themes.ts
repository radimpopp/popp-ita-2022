export const breakpointsMediaQueries = {
  galaxyFold: 330,
  iphoneSE: 380,
  phone: 600,
  bigPhone: 700,
  smallTablet: 1000,
  tablet: 1200,
} as const

export const theme = {
  color: {
    greyBright: '#c1c1c1',
    greyDark: '#535353',
    yellowBright: '#f7e018',
    orangeBright: '#f26005',
    blackBoxShadow: 'rgba(0, 0, 0, 0.8)',
    black: '#000000',
    white: '#ffffff',
    salmon: 'salmon',
    whiteTransparent: 'rgba(255, 255, 255, 0.1)',
    pink: 'pink',
  },

  spacing: {
    extraSmall: '5px',
    small: '10px',
    medium: '20px',
    large: '30px',
    extraLarge: '50px',
    superSize: '75px',
  },

  mediaQueries: {
    phone: `@media (max-width: ${breakpointsMediaQueries.phone}px)`,
    tablet: `@media (max-width: ${breakpointsMediaQueries.tablet}px)`,
    galaxyFold: `@media (max-width: ${breakpointsMediaQueries.galaxyFold}px)`,
    table: `@media (max-width: ${breakpointsMediaQueries.bigPhone}px)`,
    iphoneSE: `@media (max-width: ${breakpointsMediaQueries.iphoneSE}px)`,
    smallTablet: `@media (max-width: ${breakpointsMediaQueries.smallTablet}px)`,
  },

  fontSize: {
    small: '1.5rem',
    smallPlus: '1.8rem',
    medium: '2rem',
    large: '3rem',
    extraLarge: '4rem',
  },

  fontWeight: {
    light: '200',
    medium: '400',
    bold: '600',
  },
} as const
